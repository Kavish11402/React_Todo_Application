// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf3r3Ia6HGkQbixc_oYe1qG_euKZC9Y4g",
    authDomain: "todo-app-ba9ae.firebaseapp.com",
    projectId: "todo-app-ba9ae",
    storageBucket: "todo-app-ba9ae.appspot.com",
    messagingSenderId: "557907815138",
    appId: "1:557907815138:web:2dd5b2393e8b86a30dccbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)