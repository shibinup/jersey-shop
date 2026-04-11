"use client";

import { useState } from "react";
import {signInWithGoogle } from "../../lib/auth";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signupUser({ email, password });

    if (res.success) {
      router.push("/");
    } else {
      alert(res.error);
    }

    setLoading(false);
  };

  // ✅ Google handler
  const handleGoogleSignup = async () => {
    setLoading(true);

    const res = await signInWithGoogle();

    if (res.success) {
      router.push("/");
    } else {
      alert(res.error);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 border rounded-lg w-[350px]">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white p-2 mb-3"
          >
            {loading ? "Creating..." : "Signup"}
          </button>
        </form>

        {/* ✅ Divider */}
        <div className="text-center mb-3">OR</div>

        {/* ✅ Google Button */}
        <button
          onClick={handleGoogleSignup}
          className="w-full border p-2 flex justify-center items-center gap-2"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}