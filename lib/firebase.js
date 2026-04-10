// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8pzsMqqRPYxJRAZ0BC86jwWFEEnfzFHA",
  authDomain: "jersey-shop-876bf.firebaseapp.com",
  projectId: "jersey-shop-876bf",
  storageBucket: "jersey-shop-876bf.firebasestorage.app",
  messagingSenderId: "530740991344",
  appId: "1:530740991344:web:1b29e30cae7ed80195ebb5",
  measurementId: "G-9SFD7TLN2N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 // const analytics = getAnalytics(app);