import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

function LogIn(props) {
    const {tryToAuth} = useContext(AuthContext);

    return (
        <>
            <p>SIGNIN</p>

            <input type="text" id="email"/>
            <input type="password" id="password"/>

            <button onClick={() => {
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                if (tryToAuth(email, password) === false) {
                    alert("bad credentials");
                }
            }}>SIGNIN</button>
        </>
        )
}

export default LogIn;