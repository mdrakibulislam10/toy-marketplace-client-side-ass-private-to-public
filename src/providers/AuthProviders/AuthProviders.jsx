import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config"

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

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

    // sign in with google
    const signInWithGoogle = () => {
        setSpinner(true);
        return signInWithPopup(auth, googleProvider);
    };

    // logout
    const logOut = () => {
        return signOut(auth);
    };

    // get user data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setSpinner(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        spinner,
        signUp,
        login,
        signInWithGoogle,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;