import React, { useState } from "react";
import { User } from "./types";
import axios from "axios";
import "./App.css";

function App() {
    const [ID, setID] = useState<number>(0);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [recEmail, setRecEmail] = useState("");
    const [userType, setUserType] = useState(0);

    const createUser = () => {
        axios
            .post("http://localhost:8080/user", {
                id: ID,
                login: login,
                password: password,
                recEmail: recEmail,
                userType: userType,
            })
            .then(() => {
                console.log("Created!");
            });
    };
    return (
        <div className="App">
            <div className="items">
                <label htmlFor="">ID</label>
                <input
                    type="number"
                    onChange={(event) => {
                        setID(Number(event.target.value));
                    }}
                />

                <label htmlFor="">Login</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setLogin(event.target.value);
                    }}
                />

                <label htmlFor="">Password</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />

                <label htmlFor="">Recuparation Email</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setRecEmail(event.target.value);
                    }}
                />

                <label htmlFor="">User type</label>
                <input
                    type="number"
                    onChange={(event) => {
                        setUserType(Number(event.target.value));
                    }}
                />

                <button
                    onClick={(event) => {
                        createUser();
                    }}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
}

export default App;
