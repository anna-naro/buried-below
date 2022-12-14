class CodecHandler {
  private static encryptionMap = new Map<string, number>();
  private static decryptionMap = new Map<number, string>();

  private static createEncryptionMap = (
    textBasedEncryption: string[]
  ): void => {
    textBasedEncryption.forEach((word: string, index: number) => {
      const firstCharacter = word[0].toLowerCase();

      if (!this.encryptionMap.has(firstCharacter))
        this.encryptionMap.set(firstCharacter, index + 1);
    });
  };

  private static createDecryptionMap = (): void => {
    this.encryptionMap.forEach((value: number, key: string) => {
      this.decryptionMap.set(value, key);
    });
  };

  static init(textBasedEncryption: string[]) {
    this.createEncryptionMap(textBasedEncryption);
    this.createDecryptionMap();
  }

  static encryptText(text: string): number[] {
    return text
      .split("")
      .map((char: string) => this.encryptionMap.get(char.toLowerCase()) ?? 0);
  }

  static decryptText = (encryptedText: number[]): string => {
    const decryptedTextArr = encryptedText.map((num: number): string => {
      return this.decryptionMap.get(num) ?? "NOT FOUND";
    });

    return decryptedTextArr.join("");
  };
}

export default CodecHandler;
