import express from "express";
import CodecController from "../controllers/CodecController";
import "../handlers/CodecHandler";

const codecRouter = express.Router();

codecRouter.post("/init", CodecController.postInit);
codecRouter.post("/encrypt", CodecController.postEncrypt);
codecRouter.post("/decrypt", CodecController.postDecrypt);

export default codecRouter;
