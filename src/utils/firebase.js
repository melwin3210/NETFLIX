// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBudsA8M_uCcJuR87lrc7VZ0B-D42W-bBE",
  authDomain: "netflixgpt-15c4d.firebaseapp.com",
  projectId: "netflixgpt-15c4d",
  storageBucket: "netflixgpt-15c4d.appspot.com",
  messagingSenderId: "882633953610",
  appId: "1:882633953610:web:ae014917bdecae168231b3",
  measurementId: "G-0ZTZHE29PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
