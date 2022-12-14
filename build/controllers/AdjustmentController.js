"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdjustmentHandler_1 = __importDefault(require("../handlers/AdjustmentHandler"));
class AdjustmentController {
}
AdjustmentController.post = (req, res) => {
    const { baseText, modificationsArr, replacementsArr, } = req.body;
    const updated_text = AdjustmentHandler_1.default.init(baseText, modificationsArr, replacementsArr);
    res.send({ updated_text });
};
exports.default = AdjustmentController;
