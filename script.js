import { database } from "./firebase.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const form = document.getElementById("volunteerForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value
    };

    push(ref(database, "volunteers"), data)
        .then(() => {
            document.getElementById("success").innerHTML =
                "✅ আপনার নিবন্ধন সফল হয়েছে। ধন্যবাদ!";
            form.reset();
        })
        .catch((error) => {
            alert("ত্রুটি: " + error.message);
        });
});