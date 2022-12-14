"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CodecHandler_1 = __importDefault(require("../handlers/CodecHandler"));
class CodecController {
    static postInit(req, res) {
        const { textBasedEncryption } = req.body;
        CodecHandler_1.default.init(textBasedEncryption);
        res.send("Codec has been initialized");
    }
    static postEncrypt(req, res) {
        const { text } = req.body;
        const encypted_text = CodecHandler_1.default.encryptText(text);
        res.send({ encypted_text });
    }
    static postDecrypt(req, res) {
        const { encryptedText } = req.body;
        const decrypted_text = CodecHandler_1.default.decryptText(encryptedText);
        res.send({ decrypted_text });
    }
}
exports.default = CodecController;
