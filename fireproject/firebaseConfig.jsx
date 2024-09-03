// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcuokOXOh2KCwAcT-x3jvTbzaOJHSeaxM",
  authDomain: "firedemo-project-703d8.firebaseapp.com",
  projectId: "firedemo-project-703d8",
  storageBucket: "firedemo-project-703d8.appspot.com",
  messagingSenderId: "694877586481",
  appId: "1:694877586481:web:433f550dcf3595fe234110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const firestore=getFirestore(app)
export{auth,firestore};
