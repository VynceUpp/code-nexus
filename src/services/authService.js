import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

// Register New User
export const handleRegister = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Login Existing User
export const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Google Sign-In
export const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    console.error("Google Sign-In Error:", error); // Log full error object

    // Extract meaningful error messages
    let errorMessage = "An error occurred during sign-in. Please try again.";

    // if (error.code === "auth/popup-closed-by-user") {
    //   errorMessage = "Sign-in popup was closed before completing the sign-in.";
    // } else if (error.code === "auth/cancelled-popup-request") {
    //   errorMessage = "Another sign-in request was made before completing the first.";
    // } else if (error.code === "auth/account-exists-with-different-credential") {
    //   errorMessage =
    //     "An account with this email already exists with a different sign-in method.";
    // } else if (error.code === "auth/network-request-failed") {
    //   errorMessage = "Network error. Please check your internet connection.";
    // } else if (error.code === "auth/internal-error") {
    //   errorMessage = "Internal error. Please try again later.";
    // } else if (error.message) {
    //   errorMessage = error.message; // Use Firebase's default error message
    // }

    return { success: false, error: errorMessage };
  }
};


// GitHub Sign-In
export const handleGitHubSignIn = async () => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const handleLogout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
