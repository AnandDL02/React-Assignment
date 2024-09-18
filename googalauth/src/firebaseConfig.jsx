// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1eBQ3ZIrtV4Sl0K13E5e1sW_Juf1PmFo",
  authDomain: "googalauth.firebaseapp.com",
  projectId: "googalauth",
  storageBucket: "googalauth.appspot.com",
  messagingSenderId: "361878174418",
  appId: "1:361878174418:web:f9958fc5740a2c14380b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Provider = new GoogleAuthProvider

export {auth , Provider}



 