import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDumuTT5BHNRRMgBG8Wga0YzU48QUrxrXE",
  authDomain: "code-nexus-3279e.firebaseapp.com",
  projectId: "code-nexus-3279e",
  storageBucket: "code-nexus-3279e.firebasestorage.app",
  messagingSenderId: "681387896280",
  appId: "1:681387896280:web:2b9c718fbbaf97028616ad",
  measurementId: "G-LK8PWDJD5Q"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);