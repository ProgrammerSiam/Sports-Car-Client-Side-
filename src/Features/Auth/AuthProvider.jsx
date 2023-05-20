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
  const provider = new GoogleAuthProvider();
  // const user={displayName:"mehedi hasan siam"}
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singupUser = () => {
    return signInWithPopup(auth, provider);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
    singupUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
