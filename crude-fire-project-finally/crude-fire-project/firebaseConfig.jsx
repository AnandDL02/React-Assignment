// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3sBBYjzbToiijgSLEVG2FfwUYpS0rFc4",
  authDomain: "crude-fire-project-finally.firebaseapp.com",
  projectId: "crude-fire-project-finally",
  storageBucket: "crude-fire-project-finally.appspot.com",
  messagingSenderId: "818166304934",
  appId: "1:818166304934:web:cde91191ca30c50f7a6467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let firestore=getFirestore(app)

export{firestore}
