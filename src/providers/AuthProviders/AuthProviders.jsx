import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config"

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [spinner, setSpinner] = useState(true);

    // sign up
    const signUp = (email, password) => {
        setSpinner(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login

    // logout

    // get user data


    const authInfo = { user, spinner, signUp, };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;