import { database } from "./firebase.js";

import {
    ref,
    push
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// ======================
// Elements
// ======================

const form = document.getElementById("volunteerForm");
const success = document.getElementById("success");
const submitBtn = form.querySelector("button");

// ======================
// Form Submit
// ======================

form.addEventListener("submit", async (e) => {
                
                e.preventDefault();
                
                const name = document.getElementById("name").value.trim();
                
                const phone = document.getElementById("phone").value.trim();
                
                const address = document.getElementById("address").value.trim();
                
                const whatsapp = document.getElementById("whatsapp").value.trim();
                
                const email = document.getElementById("email").value.trim();
                
                const reason = document.getElementById("reason").value.trim();
                
                // ======================
                // Validation
                // ======================
                
                if (!/^01\d{9}$/.test(phone)) {
                    
                    success.innerHTML = "❌ সঠিক মোবাইল নম্বর লিখুন।";
                    success.style.color = "red";
                    
                    alert("❌ সঠিক মোবাইল নম্বর লিখুন।");
                    
                    return;
                    
                }
                
                if (whatsapp !== "" && !/^01\d{9}$/.test(whatsapp)) {
                    
                    success.innerHTML = "❌ সঠিক WhatsApp নম্বর লিখুন।";
                    success.style.color = "red";
                    
                    alert("❌ সঠিক WhatsApp নম্বর লিখুন।");
                    
                    return;
                    
                }
                
                submitBtn.disabled = true;
                
                submitBtn.innerHTML = "অপেক্ষা করুন...";
                try {

        await push(ref(database, "volunteers"), {

            name: name,
            phone: phone,
            whatsapp: whatsapp,
            address: address,
            email: email,
            reason: reason,

            status: "Pending",

            submittedAt: new Date().toLocaleString("bn-BD")

        });

        success.innerHTML =
            "✅ আপনার আবেদন সফলভাবে জমা হয়েছে।";

        success.style.color = "green";

        alert("✅ আপনার আবেদন সফলভাবে জমা হয়েছে।");

        form.reset();

    } catch (error) {

        console.error(error);

        success.innerHTML =
            "❌ তথ্য জমা দেওয়া যায়নি। আবার চেষ্টা করুন।";

        success.style.color = "red";

        alert("❌ Error: " + error.message);

    }

    submitBtn.disabled = false;

    submitBtn.innerHTML = "তথ্য জমা দিন";

});
// ======================
// Back To Top Button
// ======================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    window.topFunction = function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

}

// ======================
// Auto Image Slider
// ======================

let slideIndex = 0;

function showSlides() {

    const slides = document.getElementsByClassName("slides");

    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);

}

showSlides();

// ======================
// Professional Header Hide / Show
// ======================

const header = document.querySelector("header");

if (header) {

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;

        // ছোট করা
        if (currentScroll > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // নিচে স্ক্রল করলে Header লুকাবে
        if (currentScroll > lastScroll && currentScroll > 150) {

            header.classList.add("hide-header");

        } else {

            header.classList.remove("hide-header");

        }

        lastScroll = currentScroll;

    });

}

// ======================
// End of File
// ======================

console.log("✅ Dhonnobad Foundation Script Loaded Successfully");