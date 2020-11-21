import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

function SignUp(props) {
    const {tryToSignUp} = useContext(AuthContext);
    return (
        <>
            <p>SIGNUP</p>

            <input type="text" id="email"/>
            <input type="password" id="password"/>

            <button onClick={() => {
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                if (tryToSignUp(email, password) === false) {
                    alert("this user already exist");
                } 
            }}>SIGNUP</button>
        </>
        )
}

export default SignUp;
