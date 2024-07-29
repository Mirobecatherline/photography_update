// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxnA0QMqpRnhloPO9sG_p2yI0VdXrZjHA",
  authDomain: "photo-auth-33f7b.firebaseapp.com",
  projectId: "photo-auth-33f7b",
  storageBucket: "photo-auth-33f7b.appspot.com",
  messagingSenderId: "448886434746",
  appId: "1:448886434746:web:52fdc5e3d282d0209a0b83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);