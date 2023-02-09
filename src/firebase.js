// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALZZ7rxHwuKTLTEiOtkrwahvY0gR8t4ag",
  authDomain: "virtual-plant-care.firebaseapp.com",
  projectId: "virtual-plant-care",
  storageBucket: "virtual-plant-care.appspot.com",
  messagingSenderId: "545701693488",
  appId: "1:545701693488:web:7b8047942327aa8fd485f5"
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;