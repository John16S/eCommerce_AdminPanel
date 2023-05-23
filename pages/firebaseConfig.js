// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFYX19qEmJlrOJAPaaV5txdL6CK3Xcw8o",
    authDomain: "e-commerce-4c154.firebaseapp.com",
    projectId: "e-commerce-4c154",
    storageBucket: "e-commerce-4c154.appspot.com",
    messagingSenderId: "1083011976283",
    appId: "1:1083011976283:web:554e4d5b74b3e57a57c37e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authWithEmail = getAuth(app);
