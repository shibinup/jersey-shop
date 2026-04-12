"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../lib/firebase";

export const MyAuthContext = createContext();

export const MyAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);     // null = not logged in
  const [loading, setLoading] = useState(true); // true = checking auth

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);        // user OR null
      setLoading(false); // auth finished
    });

    return () => unsubscribe();
  }, []);

  return (
    <MyAuthContext.Provider value={{ user, loading }}>
      {children}
    </MyAuthContext.Provider>
  );
};

// ✅ custom hook
export const useAuth = () => {
  return useContext(MyAuthContext);
};