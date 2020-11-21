import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {Switch, Route, Link, Redirect} from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Check from "./Check";
import Drop from "./Drop";
import Radio from "./Radio";

function App(props) {
    const {isLogged, user, signout} = useContext(AuthContext);

    return (
        <>
            {isLogged() ? 
                <Redirect to="/"/>
                :
                <></>
            }

            {   
                isLogged() ?
                    <div id="isLogged">
                        <Link to="/">Home </Link>
                        <Link to="/drop">dropdown </Link>
                        <Link to="/check">checkbox </Link>
                        <Link to="/radio">radiobox </Link>

                        <Switch>
                            <Route exact path="/">
                                <p>Homescreen</p>
                                <p>U r logged: {user}</p>
                                <button onClick={signout}>Signout</button>
                            </Route>
                            <Route path="/drop">
                                <Drop/>
                            </Route>
                            <Route path="/check">
                                <Check/>
                            </Route>
                            <Route path="/radio">
                                <Radio/>
                            </Route>
                        </Switch>
                    </div>
                :
                    <div id="isNotLogged">
                        <Link to="/">signin </Link>
                        <Link to="/signup">signup </Link>

                        <Switch>
                            <Route exact path="/">
                                <LogIn/>
                            </Route>
                            <Route path="/signup">
                                <SignUp/>
                            </Route>
                        </Switch>
                    </div>
            }
        </>
    )
        
    
}

export default App