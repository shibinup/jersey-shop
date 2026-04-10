"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "@/lib/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();
console.log(auth.currentUser);

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await logoutUser();

    if (res.success) {
      alert("Logged out successfully ✅");

      // redirect to home
      router.push("/");
    } else {
      alert(res.error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}