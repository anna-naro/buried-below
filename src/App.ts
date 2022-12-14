import express from "express";
import dotenv from "dotenv";

import adjustmentRouter from "./routers/AdjustmentRouter";
import codecRouter from "./routers/CodecRouter";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/adjust", adjustmentRouter);
app.use("/codec", codecRouter);

app.listen(process.env.PORT, () => {
  console.log("running :)");
});
