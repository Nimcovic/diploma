// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "silicon-current-427612-c6.firebaseapp.com",
  projectId: "silicon-current-427612-c6",
  storageBucket: "silicon-current-427612-c6.appspot.com",
  messagingSenderId: "609622213035",
  appId: "1:609622213035:web:46718f568c74d7c2f252ee",
  measurementId: "G-63NPH6R0LG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
