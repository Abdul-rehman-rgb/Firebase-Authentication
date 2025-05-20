import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT1estKJx1m3r_VjDXD_vMRIOge91ZQmg",
  authDomain: "react-authentication-2a9b5.firebaseapp.com",
  projectId: "react-authentication-2a9b5",
  storageBucket: "react-authentication-2a9b5.firebasestorage.app",
  messagingSenderId: "889088265416",
  appId: "1:889088265416:web:1b7526b5e837cd316fe9fd",
  measurementId: "G-YP8D0TP42R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const provider = new FacebookAuthProvider();
export const auth = getAuth(app);
export default app;