import firebase from "firebase/app";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/database";
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyDAyWzUsVxlAEU0L5PoYtcfO2bqBH3NtmY",
  authDomain: "ti-bdd-des.firebaseapp.com",
  databaseURL: "https://ti-bdd-des-default-rtdb.firebaseio.com",
  projectId: "ti-bdd-des",
  storageBucket: "ti-bdd-des.appspot.com",
  messagingSenderId: "888138355397",
  appId: "1:888138355397:web:42246287d8743d7b8d16ac",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const auth = app.auth();
