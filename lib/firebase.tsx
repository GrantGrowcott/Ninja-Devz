// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Rl4TitTS-c0HN41UsNWZxbiCwNoHafM",
  authDomain: "ninja-devz.firebaseapp.com",
  projectId: "ninja-devz",
  storageBucket: "ninja-devz.firebasestorage.app",
  messagingSenderId: "359035207876",
  appId: "1:359035207876:web:46e258918059edee8ec991",
  measurementId: "G-7X57YFJY01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db,auth};