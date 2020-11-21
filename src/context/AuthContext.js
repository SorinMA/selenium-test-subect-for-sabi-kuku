import React, {useState} from "react";
// auth context, who tell if a user is loged in app
const AuthContext = React.createContext();

function AuthProvider(props) {
    let [isAuth, setIsAuth] = useState(false);
    let [usersCredentials, setUsersCredentials] = useState({
        "admin": "admin123"
    });
    let [user, setUser] = useState(undefined);

    const isLogged = () => {
        return isAuth;
    };


    const tryToAuth = (username, password) => {
        // to lazy to create a backend, so i'll fake it
        if (usersCredentials[username] === password) {
            setIsAuth(true);
            setUser(username);
        } else {
            setIsAuth(false);
        }
    };

    const tryToSignUp = (username, password) => {
        if (usersCredentials[username] !== undefined) {
            return false;
        } else {
            setUsersCredentials(prevCredentials => ({
                ...prevCredentials,
                [username]: password
            }));
            setUser(username);
            setIsAuth(true);
            return true;
        }
    }

    const signout = () => {
        setIsAuth(false);
        setUser(undefined);
    }

    return (
        <AuthContext.Provider
            value={{
               isLogged:isLogged,
               tryToAuth:tryToAuth,
               tryToSignUp:tryToSignUp,
               signout:signout,
               user:user
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}

