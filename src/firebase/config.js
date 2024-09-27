// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaa52Jxt-ZX0fTzMR2a9bHSTyYYC8Hsq4",
  authDomain: "alvarocardoso-d323e.firebaseapp.com",
  projectId: "alvarocardoso-d323e",
  storageBucket: "alvarocardoso-d323e.appspot.com",
  messagingSenderId: "596981995220",
  appId: "1:596981995220:web:8ae4b06769e27b5142cd41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
