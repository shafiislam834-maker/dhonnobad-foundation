import { auth, database } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    ref,
    onValue,
    update,
    remove
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// ======================
// Elements
// ======================

const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

const applicationList = document.getElementById("applicationList");

const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const approvedCount = document.getElementById("approvedCount");

const search = document.getElementById("search");

// ======================
// Login
// ======================

loginBtn.addEventListener("click", () => {
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, email, password)
        
        .then(() => {
            
            alert("✅ সফলভাবে লগইন হয়েছে");
            
        })
        
        .catch(error => {
            
            document.getElementById("loginError").innerHTML =
                "❌ " + error.message;
            
        });
    
});

// ======================
// Logout
// ======================

logoutBtn.addEventListener("click", () => {
    
    signOut(auth);
    
});

// ======================
// Auth Check
// ======================

onAuthStateChanged(auth, user => {
    
    if (user) {
        
        loginPage.style.display = "none";
        dashboard.style.display = "block";
        
        loadApplications();
        
    } else {
        
        loginPage.style.display = "flex";
        dashboard.style.display = "none";
        
    }
    
});

// ======================
// Load Applications
// ======================

function loadApplications() {
    
    const volunteerRef = ref(database, "volunteers");
    
    onValue(volunteerRef, snapshot => {
        
        applicationList.innerHTML = "";
        
        let total = 0;
        let pending = 0;
        let approved = 0;
        
        if (!snapshot.exists()) {
            
            applicationList.innerHTML =
                "<h3 style='text-align:center'>কোন আবেদন পাওয়া যায়নি</h3>";
            
            totalCount.innerHTML = 0;
            pendingCount.innerHTML = 0;
            approvedCount.innerHTML = 0;
            
            return;
            
        }
        
        snapshot.forEach(child => {
            
            total++;
            
            const key = child.key;
            const data = child.val();
            
            if (data.status === "Approved") {
                
                approved++;
                
            } else {
                
                pending++;
                
            }
            
            applicationList.innerHTML += `

<div class="application-card">

<h3>${data.name || "-"}</h3>

<p><b>📱 Mobile:</b> ${data.phone || "-"}</p>

<p><b>💬 WhatsApp:</b> ${data.whatsapp || "-"}</p>

<p><b>📧 Email:</b> ${data.email || "-"}</p>

<p><b>📍 Address:</b> ${data.address || "-"}</p>

<p><b>📝 Reason:</b> ${data.reason || "-"}</p>

<p><b>📅 Time:</b> ${data.submittedAt || "-"}</p>

<p><b>Status:</b> ${data.status || "Pending"}</p>

<div class="button-group">

<a href="tel:${data.phone}"
class="call-btn">

📞 Call

</a>

<a href="https://wa.me/88${data.whatsapp || data.phone}?text=${encodeURIComponent(
`আসসালামু আলাইকুম ${data.name},

ধন্যবাদ ফাউন্ডেশনে স্বেচ্ছাসেবক হিসেবে আবেদন করার জন্য আপনাকে আন্তরিক ধন্যবাদ।

আপনার আবেদন আমরা পেয়েছি এবং পর্যালোচনা করছি।

— ধন্যবাদ ফাউন্ডেশন`
)}"
target="_blank"
class="whatsapp-btn">

💬 WhatsApp

</a>

<button
class="approve-btn"
onclick="approveUser('${key}')">

✅ Approve

</button>

<button
class="delete-btn"
onclick="deleteUser('${key}')">

🗑 Delete

</button>

</div>

</div>

`;
            
        });
        
        totalCount.innerHTML = total;
        pendingCount.innerHTML = pending;
        approvedCount.innerHTML = approved;
        
    });
    
}

// ======================
// Approve
// ======================

window.approveUser = function(key) {
    
    update(ref(database, "volunteers/" + key), {
        
        status: "Approved"
        
    });
    
    alert("✅ আবেদন অনুমোদন করা হয়েছে");
    
};

// ======================
// Delete
// ======================

window.deleteUser = function(key) {
    
    if (confirm("এই আবেদনটি Delete করতে চান?")) {
        
        remove(ref(database, "volunteers/" + key));
        
        alert("🗑 আবেদন Delete করা হয়েছে");
        
    }
    
};

// ======================
// Search
// ======================

search.addEventListener("keyup", function() {
    
    const value = this.value.toLowerCase();
    
    const cards =
        document.querySelectorAll(".application-card");
    
    cards.forEach(card => {
        
        if (card.innerText.toLowerCase().includes(value)) {
            
            card.style.display = "block";
            
        } else {
            
            card.style.display = "none";
            
        }
        
    });
    
});