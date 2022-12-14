import express from "express";
import AdjustmentController from "../controllers/AdjustmentController";

const adjustmentRouter = express.Router();

adjustmentRouter.post("/init", AdjustmentController.post);

export default adjustmentRouter;
