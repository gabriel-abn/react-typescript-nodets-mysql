import { User, Client, Employee } from "../types/user";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const create = (user: User, callback: Function) => {
    const queryString =
        "INSERT INTO db_user (user_id, user_login,user_password,user_rec_email,user_type) VALUES (?,?,?,?,?);";

    console.log("db - user: " + user);
    db.query(
        queryString,
        [
            user.userID,
            user.userLogin,
            user.userPassword,
            user.userRecEmail,
            user.userType,
        ],
        (err, result) => {
            if (err) {
                console.log(err.message);
                callback(err);
            }

            // const insertID = (<OkPacket>result).affectedRows;
            // callback(null, insertID);
        }
    );
};
