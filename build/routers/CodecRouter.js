"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CodecController_1 = __importDefault(require("../controllers/CodecController"));
require("../handlers/CodecHandler");
const codecRouter = express_1.default.Router();
codecRouter.post("/init", CodecController_1.default.postInit);
codecRouter.post("/encrypt", CodecController_1.default.postEncrypt);
codecRouter.post("/decrypt", CodecController_1.default.postDecrypt);
exports.default = codecRouter;
