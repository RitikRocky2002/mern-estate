// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY  ,
  authDomain: "mern-estate-e3b0b.firebaseapp.com",
  projectId: "mern-estate-e3b0b",
  storageBucket: "mern-estate-e3b0b.appspot.com",
  messagingSenderId: "509434144775",
  appId: "1:509434144775:web:87d3b339c00c17011422a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);