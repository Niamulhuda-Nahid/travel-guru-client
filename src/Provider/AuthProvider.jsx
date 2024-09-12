import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoader(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoader(false);
        return signOut(auth);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setLoader(false);
            setUser(loggedUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleSignIn,
        logOut,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;