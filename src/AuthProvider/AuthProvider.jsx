import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const authContext = createContext()

const googleProvider = new GoogleAuthProvider();

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

      // sign in with google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

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

    const authInfo = {user, loading, createUser, signInUser, logOutUser, updateUserProfile, googleSignIn}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;