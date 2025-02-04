// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Securely store your Firebase credentials
const firebaseConfig = {
    apiKey: "AIzaSyCxHdqtiiYKAq0vZqBgZAJLMk3C1rmyXTQ",
    authDomain: "foodrescue-19ce0.firebaseapp.com",
    projectId: "foodrescue-19ce0",
    storageBucket: "foodrescue-19ce0.appspot.com",
    messagingSenderId: "513724700360",
    appId: "1:513724700360:web:28344e3fc64d500ed677fd",
    measurementId: "G-3F00QLEC2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
