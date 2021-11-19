/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const AuthContext = React.createContext();
const provider = new GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function googleSigin() {
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
        const { uid } = user;
        // ...
      } else {
        // User is signed out
        // ...
        console.log('User signed out');
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    googleSigin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children }
    </AuthContext.Provider>
  );
}
