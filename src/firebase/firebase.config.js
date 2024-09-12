// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOF4TUMaWhMwIE8QxHzqjYhW9oUgyfY48",
  authDomain: "travel-guru-3ac2d.firebaseapp.com",
  projectId: "travel-guru-3ac2d",
  storageBucket: "travel-guru-3ac2d.appspot.com",
  messagingSenderId: "856452011967",
  appId: "1:856452011967:web:ecbfe3f8dc6d8385c0f30a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;