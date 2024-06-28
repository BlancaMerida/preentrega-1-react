import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApZ0q5DlrMKFe951cQWu9Pvg8QfzgG6_g",
    authDomain: "proyecto0133.firebaseapp.com",
    projectId: "proyecto0133",
    storageBucket: "proyecto0133.appspot.com",
    messagingSenderId: "278535200456",
    appId: "1:278535200456:web:41e2d6b90d95ec4f1e4ffd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db