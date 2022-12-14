"use strict";
const isCharPunctuation = (char) => {
    const regexExp = /^[A-Za-z0-9]*$/;
    return !regexExp.test(char);
};
// export const createEncryptionMap = (
//   textBasedEncryption: string[]
// ): Map<string, number> => {
//   const encryptionMap = new Map();
//   textBasedEncryption.forEach((word: string, index: number) => {
//     const firstCharacter = word[0].toLowerCase();
//     if (!encryptionMap.has(firstCharacter))
//       encryptionMap.set(firstCharacter, index + 1);
//   });
//   return encryptionMap;
// };
// export const encryptText = (
//   text: string,
//   encryptionMap: Map<string, number>
// ): number[] => {
//   return text
//     .split("")
//     .map((char: string) => encryptionMap.get(char.toLowerCase()) ?? 0);
// };
