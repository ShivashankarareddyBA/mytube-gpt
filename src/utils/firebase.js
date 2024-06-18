// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiiVQOH0rtMeI1M3uvteIrN2kVFtR49Ps",
  authDomain: "mytube-gpt.firebaseapp.com",
  projectId: "mytube-gpt",
  storageBucket: "mytube-gpt.appspot.com",
  messagingSenderId: "1013589365515",
  appId: "1:1013589365515:web:9680a5e2973a47d762480e",
  measurementId: "G-YLZZTJRP8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
