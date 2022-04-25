import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFgvj1M2Hkq0d07bBcYeJIPMtS_8wrc3A",
  authDomain: "linkedin-clone-yt-70ff9.firebaseapp.com",
  projectId: "linkedin-clone-yt-70ff9",
  storageBucket: "linkedin-clone-yt-70ff9.appspot.com",
  messagingSenderId: "306778005916",
  appId: "1:306778005916:web:0598cac403fa436783e859",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
