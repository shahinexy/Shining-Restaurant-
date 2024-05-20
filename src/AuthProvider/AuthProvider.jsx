import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';

export const authContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, pass) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const signInUser = (email, pass) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const updateUserProfile = (name, photo) =>{
      return updateProfile(auth.currentUser, {
        displayName: name , photoURL: photo
      })
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
            setLoading(false)
          } else {
            setUser(null);
            setLoading(false)
          }
        });
        return () => {
          unSubscribe();
        };
      }, []);

    const authInfo = {user, loading, createUser, signInUser, logOutUser, updateUserProfile}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;