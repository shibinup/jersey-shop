"use client";


import { useEffect, useState } from "react";
import { signInWithGoogle, logoutUser } from "@/lib/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../lib/firebase";
import {SignupManagement} from "./serv"
import { MergeCart } from "./serv";


export default function AuthPage() {
  const [user, setUser] = useState(undefined);
  const handleSignIn = async () => {
    try {
            const Newuser  = await signInWithGoogle()
              let id
              if(Newuser.success){
                console.log("user is ",Newuser)
                 id = Newuser.user.uid
              } else{
                return
              }
      
               
               await MergeCart(id);
    } catch (error) {
      console.error("error", error);
      ;
    }
  };

  // ✅ Listen to auth state
  useEffect(() => {
    const auth = getAuth(app);

    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);

  // ⏳ Loading state
  if (user === undefined) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // 🔐 If user logged in
  if (user) {
    return (
      <div className="flex flex-col items-center mt-20 gap-4">
        <h2 className="text-xl font-bold">Welcome</h2>

        <p>{user.email}</p>

        <button
          onClick={logoutUser}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Sign Out
        </button>
      </div>
    );
  }

  // 🔓 If NOT logged in
  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      <h2 className="text-xl font-bold">Sign in to continue</h2>

      <button
        onClick={handleSignIn}
        className="border px-4 py-2 rounded flex items-center gap-2"
      >
        Continue with Google
      </button>
    </div>
  );
}