// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-foNQf-V9SBsZsXUhMY00q_EmLzy6EdQ",
  authDomain: "jsdotdev.firebaseapp.com",
  projectId: "jsdotdev",
  storageBucket: "jsdotdev.appspot.com",
  messagingSenderId: "989800674092",
  appId: "1:989800674092:web:d52de4cb22cc6c0634f289",
  measurementId: "G-K4PLXK5M8H",
};

// Initialize Firebase and set main modules
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
// Initialize Authorization from Firebase (with Firebase Auth UI)
const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

// Functions
const signInWithGoogle = () => {
  signInWithPopup(auth, authProvider);
};

const signOut = () => {
  auth.signOut();
};

export { db, auth, signInWithGoogle, signOut };
