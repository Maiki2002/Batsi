// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY_ruJgY9yNFbxL1CN9N-9airdi0pOfqw",
  authDomain: "batsi-173bc.firebaseapp.com",
  projectId: "batsi-173bc",
  storageBucket: "batsi-173bc.firebasestorage.app",
  messagingSenderId: "490421002716",
  appId: "1:490421002716:web:10a2dee4625def6444ef19",
  measurementId: "G-8MMG5X3SES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);