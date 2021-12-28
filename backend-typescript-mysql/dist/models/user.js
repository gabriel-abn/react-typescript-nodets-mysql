"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const create = (user, callback) => {
    const queryString = "INSERT INTO perfil (id, nome_perfil, nome, email, senha, endereco, telefone) VALUES (?,?,?,?,?,?,?);";
    console.log("db - user: " + user);
    db_1.db.query(queryString, [
        user.user_id,
        user.user_nome,
        user.user_nome_perfil,
        user.user_email,
        user.user_senha,
        user.user_endereco,
        user.user_telefone,
    ], (err, result) => {
        if (err) {
            console.log(err.message);
            callback(err);
        }
        // const insertID = (<OkPacket>result).affectedRows;
        // callback(null, insertID);
    });
};
const UserControler = {
    create,
};
exports.default = UserControler;
