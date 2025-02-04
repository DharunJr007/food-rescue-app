import { db, auth, provider } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Login Function
document.getElementById("login-btn").addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        alert(`Welcome ${result.user.displayName}!`);
    } catch (error) {
        console.error("Error logging in:", error);
    }
});

// Fetch and Display Food Data from Firestore
async function fetchFoodData() {
    const querySnapshot = await getDocs(collection(db, "food_items"));
    const foodList = document.getElementById("food-list");

    querySnapshot.forEach((doc) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${doc.data().name} - ${doc.data().location}`;
        foodList.appendChild(listItem);
    });
}

fetchFoodData();
