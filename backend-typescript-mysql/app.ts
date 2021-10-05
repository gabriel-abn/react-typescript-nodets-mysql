import * as dotenv from "dotenv";
import express from "express";
import { userRoute } from "./routes/userRouter";

const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/", userRoute);

app.listen(process.env.PORT, () => {
    console.log("Node server started running");
});
