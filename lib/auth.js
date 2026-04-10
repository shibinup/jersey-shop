import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

// ✅ Google Sign In / Sign Up (both handled automatically)
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    return {
      success: true,
      user: result.user,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

// ✅ Logout
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};