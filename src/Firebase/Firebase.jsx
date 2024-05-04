// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz_8CjciEVmXI0nju-l5aDzHeCAlO6g8o",
  authDomain: "car-doctor-7d405.firebaseapp.com",
  projectId: "car-doctor-7d405",
  storageBucket: "car-doctor-7d405.appspot.com",
  messagingSenderId: "376817833923",
  appId: "1:376817833923:web:6d7569d17d73e61dfb4f76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;