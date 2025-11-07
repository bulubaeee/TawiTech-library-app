import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkbS-S75Ewh-CJvoJcTRZ6vAXcDJaJ3HY",
    authDomain: "library-app-9e7d7.firebaseapp.com",
    projectId: "library-app-9e7d7",
    storageBucket: "library-app-9e7d7.firebasestorage.app",
    messagingSenderId: "651749539548",
    appId: "1:651749539548:web:80f9f8f7b64ea7ea4cfe19",
    measurementId: "G-F0T5ZE1ZZF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, updateDoc, doc };
