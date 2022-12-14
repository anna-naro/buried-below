import { Request, Response } from "express";
import AdjustmentHandler from "../handlers/AdjustmentHandler";
import { Modification, Replacement } from "../types/adjustment";

class AdjustmentController {
  static post = (req: Request, res: Response): void => {
    const {
      baseText,
      modificationsArr,
      replacementsArr,
    }: {
      baseText: string;
      modificationsArr: Modification[];
      replacementsArr: Replacement[];
    } = req.body;

    const updated_text = AdjustmentHandler.init(
      baseText,
      modificationsArr,
      replacementsArr
    );

    res.send({ updated_text });
  };
}

export default AdjustmentController;
