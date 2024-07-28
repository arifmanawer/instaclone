// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7EY5G5ZPaEkDP4848DjEcgyorVJNLCsU",
  authDomain: "instaclone-7b193.firebaseapp.com",
  projectId: "instaclone-7b193",
  storageBucket: "instaclone-7b193.appspot.com",
  messagingSenderId: "81014429278",
  appId: "1:81014429278:web:6ab3f651634a839d1706cf",
  measurementId: "G-3QGGC2N5FQ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };