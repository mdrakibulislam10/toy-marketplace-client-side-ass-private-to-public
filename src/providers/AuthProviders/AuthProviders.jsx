import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
    const login = (email, password) => {
        setSpinner(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout

    // get user data


    const authInfo = { user, spinner, signUp, login, };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;