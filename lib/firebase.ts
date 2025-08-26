// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4pTNnpr04svcPnQ_gqVXWwHGF6tcTRdw",
  authDomain: "myyeni.firebaseapp.com",
  projectId: "myyeni",
  storageBucket: "myyeni.firebasestorage.app",
  messagingSenderId: "120610944773",
  appId: "1:120610944773:web:f43c92ce8785351255a96c",
  measurementId: "G-ZY6P34CDYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

