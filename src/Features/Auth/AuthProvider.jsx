import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import app from "../Config/firebase.config";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
 
  // const user={displayName:"mehedi hasan siam"}

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);




  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


 const googleLogin = () => {
   setLoading(true);
   return signInWithPopup(auth, googleProvider);
 };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };




  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
