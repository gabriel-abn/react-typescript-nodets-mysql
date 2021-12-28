import { User } from "../types/user";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

const create = (user: User, callback: Function) => {
    const queryString =
        "INSERT INTO perfil (id, nome_perfil, nome, email, senha, endereco, telefone) VALUES (?,?,?,?,?,?,?);";

    console.log("db - user: " + user);
    db.query(
        queryString,
        [
            user.user_id,
            user.user_nome,
            user.user_nome_perfil,
            user.user_email,
            user.user_senha,
            user.user_endereco,
            user.user_telefone,
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

const UserControler = {
    create,
};

export default UserControler;
