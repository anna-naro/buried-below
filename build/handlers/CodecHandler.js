"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class CodecHandler {
    static init(textBasedEncryption) {
        this.createEncryptionMap(textBasedEncryption);
        this.createDecryptionMap();
    }
    static encryptText(text) {
        return text
            .split("")
            .map((char) => { var _b; return (_b = this.encryptionMap.get(char.toLowerCase())) !== null && _b !== void 0 ? _b : 0; });
    }
}
_a = CodecHandler;
CodecHandler.encryptionMap = new Map();
CodecHandler.decryptionMap = new Map();
CodecHandler.createEncryptionMap = (textBasedEncryption) => {
    textBasedEncryption.forEach((word, index) => {
        const firstCharacter = word[0].toLowerCase();
        if (!_a.encryptionMap.has(firstCharacter))
            _a.encryptionMap.set(firstCharacter, index + 1);
    });
};
CodecHandler.createDecryptionMap = () => {
    _a.encryptionMap.forEach((value, key) => {
        _a.decryptionMap.set(value, key);
    });
};
CodecHandler.decryptText = (encryptedText) => {
    const decryptedTextArr = encryptedText.map((num) => {
        var _b;
        return (_b = _a.decryptionMap.get(num)) !== null && _b !== void 0 ? _b : "NOT FOUND";
    });
    return decryptedTextArr.join("");
};
exports.default = CodecHandler;
