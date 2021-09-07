// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCQCGIE4Nqrb4SnAMB4_juRp5A0WDxL6M8",
  authDomain: "trashinformation-acdf5.firebaseapp.com",
  databaseURL: "https://trashinformation-acdf5-default-rtdb.firebaseio.com",
  projectId: "trashinformation-acdf5",
  storageBucket: "trashinformation-acdf5.appspot.com",
  messagingSenderId: "246662347209",
  appId: "1:246662347209:web:fd9e5f3a27750fba0d1018",
  measurementId: "G-5715KKYHW3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
