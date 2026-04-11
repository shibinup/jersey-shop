"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../lib/firebase";

export const MyAuthContext = createContext();

export const MyAuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  return (
   
    <MyAuthContext.Provider value={{ user }}>
       { console.log("auth context called")} 
      {children}
    </MyAuthContext.Provider>
  );
};

// ✅ custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};