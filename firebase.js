// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvIm6EdyNae1VSOCQTZ6SlYVkiDCcbXdc",
  authDomain: "uber-next-76345.firebaseapp.com",
  projectId: "uber-next-76345",
  storageBucket: "uber-next-76345.appspot.com",
  messagingSenderId: "903077602578",
  appId: "1:903077602578:web:32130decd822b5eb057fcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth};