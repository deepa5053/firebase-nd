// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCU_czC2BbanYbjSNIbqktUdtug7Hplkg4",
  authDomain: "swing-notes-c0108.firebaseapp.com",
  projectId: "swing-notes-c0108",
  storageBucket: "swing-notes-c0108.appspot.com",
  messagingSenderId: "965317215418",
  appId: "1:965317215418:web:46abf74cf3ac8161566e83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }