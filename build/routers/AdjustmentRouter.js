"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AdjustmentController_1 = __importDefault(require("../controllers/AdjustmentController"));
const adjustmentRouter = express_1.default.Router();
adjustmentRouter.post("/init", AdjustmentController_1.default.post);
exports.default = adjustmentRouter;
