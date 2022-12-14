import { Request, Response } from "express";
import CodecHandler from "../handlers/CodecHandler";

class CodecController {
  static postInit(req: Request, res: Response) {
    const { textBasedEncryption }: { textBasedEncryption: string[] } = req.body;

    CodecHandler.init(textBasedEncryption);

    res.send("Codec has been initialized");
  }

  static postEncrypt(req: Request, res: Response) {
    const { text }: { text: string } = req.body;

    const encypted_text = CodecHandler.encryptText(text);

    res.send({ encypted_text });
  }

  static postDecrypt(req: Request, res: Response) {
    const { encryptedText }: { encryptedText: number[] } = req.body;

    const decrypted_text = CodecHandler.decryptText(encryptedText);

    res.send({ decrypted_text });
  }
}

export default CodecController;
