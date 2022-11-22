// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7BJayBz0fTDJFRI4xJxLaSY3OOQJs9FE",
    authDomain: "crud-enhanced.firebaseapp.com",
    projectId: "crud-enhanced",
    storageBucket: "crud-enhanced.appspot.com",
    messagingSenderId: "279868654879",
    appId: "1:279868654879:web:33fd6c9f7c59ba8d1b5c2a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db