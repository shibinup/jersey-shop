"use client";

import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../lib/firebase";

export default function CheckUser() {
  useEffect(() => {
    const auth = getAuth(app);

    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ Current user:", user.email);
        console.log("UID:", user.uid);
      } else {
        console.log("❌ No user logged in");
      }
    });

    return () => unsub();
  }, []);

  return <div>Check console</div>;
}