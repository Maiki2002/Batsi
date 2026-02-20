// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY_Firebase,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN_Firebase,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID_Firebase,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET_Firebase,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGIN_SENDER_ID_Firebase,
  appId: process.env.EXPO_PUBLIC_APP_ID_Firebase,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID_Firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
