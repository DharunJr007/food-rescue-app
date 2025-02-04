// Import Firebase modules
import { auth, provider } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Select buttons
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const googleLoginBtn = document.getElementById("google-login-btn");
const logoutBtn = document.getElementById("logout-btn");
const userInfo = document.getElementById("user-info");

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        userInfo.innerText = `Logged in as: ${user.email}`;
        logoutBtn.style.display = "block";
        signupBtn.style.display = "none";
        loginBtn.style.display = "none";
        googleLoginBtn.style.display = "none";
    } else {
        userInfo.innerText = "";
        logoutBtn.style.display = "none";
        signupBtn.style.display = "block";
        loginBtn.style.display = "block";
        googleLoginBtn.style.display = "block";
    }
});

// Signup Function
signupBtn.addEventListener("click", () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password (min 6 characters):");

    if (email && password.length >= 6) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Signup successful! You can now log in.");
            })
            .catch((error) => {
                alert(error.message);
            });
    } else {
        alert("Invalid email or password.");
    }
});

// Login Function
loginBtn.addEventListener("click", () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Login successful!");
            })
            .catch((error) => {
                alert(error.message);
            });
    } else {
        alert("Please enter valid credentials.");
    }
});

// Google Login Function
googleLoginBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("Logged in with Google!");
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Logout Function
logoutBtn.addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            alert("Logged out!");
        })
        .catch((error) => {
            alert(error.message);
        });
});
