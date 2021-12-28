import { randomInt } from "crypto";
import express, { Request, Response } from "express";
import UserControler from "../models/user";
import { User } from "../types/user";

const userRoute = express.Router();

userRoute.post("/user", async (req: Request, res: Response) => {
    const newUser: User = req.body;
    console.log("req.body: " + req.body);
    newUser.user_id = randomInt(100);
    UserControler.create(newUser, (err: Error, user: User) => {
        if (err) {
            console.log("userRouter " + err.message);
            return res.status(500).json({ message: err.message });
        }

        res.status(200).json({ userID: user.user_id });
    });
});

export { userRoute };
