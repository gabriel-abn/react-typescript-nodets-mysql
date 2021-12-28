"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const crypto_1 = require("crypto");
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const userRoute = express_1.default.Router();
exports.userRoute = userRoute;
userRoute.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    console.log("req.body: " + req.body);
    newUser.user_id = (0, crypto_1.randomInt)(100);
    user_1.default.create(newUser, (err, user) => {
        if (err) {
            console.log("userRouter " + err.message);
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json({ userID: user.user_id });
    });
}));
