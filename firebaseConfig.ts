// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAms5OsbhlbWuTjngkbCoX-Gy7EEN8dZdU",
  authDomain: "batata-andre.firebaseapp.com",
  projectId: "batata-andre",
  storageBucket: "batata-andre.appspot.com",
  messagingSenderId: "300802651752",
  appId: "1:300802651752:web:4897acd013b9b6dedaeddd",
  measurementId: "G-N8TNVF9VNN"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);