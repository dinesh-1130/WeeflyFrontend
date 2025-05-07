// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9P8uYHfOT8F2fTw4ad7WYTHMtv65lCf8",
  authDomain: "weefly-auth.firebaseapp.com",
  projectId: "weefly-auth",
  storageBucket: "weefly-auth.firebasestorage.app",
  messagingSenderId: "309755458136",
  appId: "1:309755458136:web:f5b55ba6d5adb9f4ef102d",
  measurementId: "G-L0XHNZMQPX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };

/////////////////////////
//
// google login
//
////////////////////////
export const HandleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
    return result;
  } catch (err) {
    console.error("Login Error:", err);
  }
};

/////////////////////////
//
// google logout
//
////////////////////////
export const HandleGoogleLogout = async () => {
  try {
    const result = await signOut(auth);
    console.log("User Info:", result.user);
    return result;
  } catch (err) {
    console.error("Login Error:", err);
  }
};

////////////////////////
//
// Google Forgot Password
//
////////////////////////
export const HandleGoogleForgotPassword = async ({ email }) => {
  try {
    const result = await sendPasswordResetEmail(auth, email);
    const Message = "Password reset email sent. Check your inbox.";
    console.log(result);
    return Message;
  } catch (err) {
    console.error("Login Error:", err);
  }
};
