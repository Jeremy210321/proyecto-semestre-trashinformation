// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/database";
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyAf-96WQXcd7idTjZg3DmKcBSThT1ztYJU",
  authDomain: "trashinformation-9c0db.firebaseapp.com",
  databaseURL: "https://trashinformation-9c0db-default-rtdb.firebaseio.com",
  projectId: "trashinformation-9c0db",
  storageBucket: "trashinformation-9c0db.appspot.com",
  messagingSenderId: "742451097642",
  appId: "1:742451097642:web:719a9be070633ac3915353",
  measurementId: "G-9CLWVNJXHZ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const auth = app.auth();
