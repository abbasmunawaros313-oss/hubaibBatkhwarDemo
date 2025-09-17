// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAcrOD8535TR_jp-DlEgTupCCWJ4VTqBs",
  authDomain: "hubiabbakthwar.firebaseapp.com",
  projectId: "hubiabbakthwar",
  storageBucket: "hubiabbakthwar.firebasestorage.app",
  messagingSenderId: "1077985823153",
  appId: "1:1077985823153:web:b291c2de7fb5ef16cb9590",
  measurementId: "G-PHK4WP3GEP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
