"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { signInWithGoogle, logoutUser } from "@/lib/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../lib/firebase";
import {SignupManagement} from "./serv"

export default function AuthPage() {
  const [user, setUser] = useState(undefined);

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
        onClick={SignupManagement}
        className="border px-4 py-2 rounded flex items-center gap-2"
      >
        Continue with Google
      </button>
    </div>
  );
}