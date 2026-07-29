// =======================================
// Dhonnobad Foundation AI Chatbot V3
// Part-1
// =======================================

// ---------- Elements ----------

const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

// ---------- Open Chat ----------

chatToggle.addEventListener("click", () => {
  
  chatBox.style.display = "flex";
  
  userInput.focus();
  
});

// ---------- Close Chat ----------

closeChat.addEventListener("click", () => {
  
  chatBox.style.display = "none";
  
});

// ---------- Greeting ----------

function greeting() {
  
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    
    return "🌞 আসসালামু আলাইকুম, শুভ সকাল।";
    
  }
  
  if (hour >= 12 && hour < 17) {
    
    return "☀️ শুভ দুপুর।";
    
  }
  
  if (hour >= 17 && hour < 20) {
    
    return "🌇 শুভ সন্ধ্যা।";
    
  }
  
  return "🌙 শুভ রাত্রি।";
  
}

// ---------- First Message ----------

window.addEventListener("load", () => {
  
  chatBody.innerHTML = `

<div class="bot-message">

${greeting()}

<br><br>

💜 ধন্যবাদ ফাউন্ডেশনের AI সহকারীতে আপনাকে স্বাগতম।

<br><br>

আপনি জানতে পারেন—

<br><br>

💰 টাকা জমা

<br>

📱 বিকাশ নম্বর

<br>

💳 নগদ নম্বর

<br>

👥 সদস্য হওয়া

<br>

📞 যোগাযোগ

<br>

❤️ কার্যক্রম

<br>

👤 প্রতিষ্ঠাতা

</div>

`;
  
});

// ---------- Send ----------

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e) {
  
  if (e.key === "Enter") {
    
    sendMessage();
    
  }
  
});

// ---------- User Message ----------

function sendMessage() {
  
  const text = userInput.value.trim();
  
  if (text === "") return;
  
  chatBody.innerHTML += `

<div class="user-message">

${text}

</div>

`;
  
  userInput.value = "";
  
  chatBody.scrollTop = chatBody.scrollHeight;
  
  reply(text);
  
}

// ---------- Bot Message ----------

function botReply(message) {
  
  chatBody.innerHTML += `

<div class="bot-message">

${message}

</div>

`;
  
  chatBody.scrollTop = chatBody.scrollHeight;
  
}

// ---------- Typing ----------

function showTyping() {
  
  const typing = document.createElement("div");
  
  typing.className = "typing";
  
  typing.id = "typing";
  
  typing.innerHTML = "🤖 লিখছে...";
  
  chatBody.appendChild(typing);
  
  chatBody.scrollTop = chatBody.scrollHeight;
  
}

function hideTyping() {
  
  const typing = document.getElementById("typing");
  
  if (typing) {
    
    typing.remove();
    
  }
  
}
// =======================================
// AI Brain (Part-2)
// =======================================

function reply(question){

const q = question.toLowerCase().trim();

let answer = "";

// =========================
// Foundation
// =========================

if(
q.includes("ফাউন্ডেশন") ||
q.includes("foundation")
){

answer=`

💜 <b>ধন্যবাদ ফাউন্ডেশন</b>

এটি একটি মানবিক ও সামাজিক সেবামূলক সংগঠন।

আমাদের লক্ষ্য অসহায়, দরিদ্র ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো।

`;

}

// =========================
// Founder
// =========================

else if(
q.includes("প্রতিষ্ঠাতা") ||
q.includes("founder")
){

answer=`

👤 <b>প্রতিষ্ঠাতা</b>

Abdullah Al Shafi

`;

}

// =========================
// Donation
// =========================

else if(
q.includes("টাকা") ||
q.includes("ডোনেট") ||
q.includes("donate") ||
q.includes("অনুদান")
){

answer=`

💰 <b>টাকা জমা দেওয়ার নিয়ম</b>

📱 বিকাশ: <b>01733476806</b>

📱 নগদ: <b>01732987759</b>

টাকা পাঠানোর পরে TXN নম্বর জমা দিন।

`;

}

// =========================
// bKash
// =========================

else if(
q.includes("বিকাশ") ||
q.includes("bkash")
){

answer=`

📱 <b>বিকাশ নম্বর</b>

01733476806

`;

}

// =========================
// Nagad
// =========================

else if(
q.includes("নগদ") ||
q.includes("nagad")
){

answer=`

📱 <b>নগদ নম্বর</b>

01732987759

`;

}

// =========================
// Member
// =========================

else if(
q.includes("সদস্য") ||
q.includes("join") ||
q.includes("যোগ")
){

answer=`

👥 <b>সদস্য হতে</b>

Join Form পূরণ করুন।

সর্বনিম্ন মাসিক অনুদান:

<b>৫০ টাকা</b>

`;

}

// =========================
// Monthly
// =========================

else if(
q.includes("মাসিক") ||
q.includes("মাসে")
){

answer=`

💜 মাসিক সদস্য অনুদান

<b>৫০ টাকা</b>

`;

}

// =========================
// Contact
// =========================

else if(
q.includes("যোগাযোগ") ||
q.includes("ফোন") ||
q.includes("কল")
){

answer=`

📞 ফোন

01733476806

💬 WhatsApp

01732987759

📧 Email

dhonnobad61@gmail.com

`;

}

// =========================
// Address
// =========================

else if(
q.includes("ঠিকানা") ||
q.includes("address")
){

answer=`

📍

গুল্লাহ্

করোটিয়া

টাঙ্গাইল

বাংলাদেশ

`;

}

// =========================
// Activities
// =========================

else if(
q.includes("কার্যক্রম") ||
q.includes("কাজ")
){

answer=`

❤️ আমাদের কার্যক্রম

• অসহায় মানুষের সহায়তা

• শিক্ষা কার্যক্রম

• ত্রাণ বিতরণ

• ইফতার বিতরণ

• শীতবস্ত্র বিতরণ

• স্বেচ্ছাসেবক কার্যক্রম

`;

}
// =========================
// Phone Number
// =========================

else if(
q.includes("ফোন নম্বর") ||
q=="ফোন"
){

answer=`

📞 ফোন নম্বর

<b>01733476806</b>

`;

}

// =========================
// Email
// =========================

else if(
q.includes("ইমেইল") ||
q.includes("email")
){

answer=`

📧 ইমেইল

<b>dhonnobad61@gmail.com</b>

`;

}

// =========================
// WhatsApp
// =========================

else if(
q.includes("হোয়াটসঅ্যাপ") ||
q.includes("whatsapp")
){

answer=`

💬 WhatsApp

<b>01732987759</b>

`;

}

// =========================
// Volunteer
// =========================

else if(
q.includes("স্বেচ্ছাসেবক") ||
q.includes("volunteer")
){

answer=`

🤝 স্বেচ্ছাসেবক হতে Join Form পূরণ করুন।

`;

}

// =========================
// TXN
// =========================

else if(
q.includes("txn") ||
q.includes("টিএক্সএন") ||
q.includes("ট্রানজেকশন")
){

answer=`

🧾 TXN হলো আপনার টাকা পাঠানোর Transaction ID।

টাকা পাঠানোর পরে এই নম্বরটি অবশ্যই জমা দিন।

`;

}

// =========================
// Login
// =========================

else if(
q.includes("লগইন") ||
q.includes("login")
){

answer=`

🔐 লগইন করতে Login Page ব্যবহার করুন।

সদস্যদের জন্য আলাদা Dashboard রয়েছে।

`;

}

// =========================
// Admin
// =========================

else if(
q.includes("অ্যাডমিন") ||
q.includes("admin")
){

answer=`

👑 Admin Panel শুধুমাত্র অনুমোদিত অ্যাডমিনদের জন্য।

`;

}

// =========================
// Website
// =========================

else if(
q.includes("ওয়েবসাইট") ||
q.includes("website")
){

answer=`

🌐 এটি ধন্যবাদ ফাউন্ডেশনের অফিসিয়াল ওয়েবসাইট।

`;

}

// =========================
// Thanks
// =========================

else if(
q.includes("ধন্যবাদ") ||
q.includes("thanks") ||
q.includes("thank you")
){

answer=`

💜 ধন্যবাদ।

ধন্যবাদ ফাউন্ডেশনের সাথে থাকার জন্য আন্তরিক কৃতজ্ঞতা।

আল্লাহ আপনাকে উত্তম প্রতিদান দান করুন। 🤲

`;

}

// =========================
// Default Reply
// =========================

else{

answer=`

😊 দুঃখিত, আমি আপনার প্রশ্নটি বুঝতে পারিনি।

আপনি নিচের বিষয়গুলো সম্পর্কে জানতে পারেন—

💜 ফাউন্ডেশন

💰 টাকা জমা

📱 বিকাশ

💳 নগদ

👥 সদস্য

📞 যোগাযোগ

❤️ কার্যক্রম

👤 প্রতিষ্ঠাতা

`;

}

// =========================
// Send Reply
// =========================

showTyping();

setTimeout(()=>{

hideTyping();

botReply(answer);

},800);

}
// =======================================
// Dhonnobad Foundation AI Chatbot
// Part-4 (Final)
// =======================================

// ---------- Quick Question ----------

function quickQuestion(text){

    userInput.value = text;

    sendMessage();

}

// ---------- Voice Search ----------

if ("webkitSpeechRecognition" in window) {

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "bn-BD";

    recognition.continuous = false;

    recognition.interimResults = false;

    const micBtn = document.createElement("button");

    micBtn.id = "micBtn";

    micBtn.innerHTML = "🎤";

    document.querySelector(".chat-input").appendChild(micBtn);

    micBtn.onclick = () => {

        recognition.start();

    };

    recognition.onresult = (event) => {

        userInput.value = event.results[0][0].transcript;

        sendMessage();

    };

    recognition.onerror = () => {

        alert("🎤 ভয়েস ইনপুট ব্যবহার করা যাচ্ছে না।");

    };

}

// ---------- Auto Scroll ----------

const observer = new MutationObserver(() => {

    chatBody.scrollTop = chatBody.scrollHeight;

});

observer.observe(chatBody, {

    childList: true

});

// ---------- Welcome ----------

console.log("🤖 Dhonnobad AI Loaded");

// ---------- Global Functions ----------

window.quickQuestion = quickQuestion;

// ---------- Extra Commands ----------

document.addEventListener("click", function(e){

    if(e.target.classList.contains("gotoDonate")){

        window.location.href="donation.html";

    }

    if(e.target.classList.contains("gotoJoin")){

        window.location.href="login.html";

    }

    if(e.target.classList.contains("gotoContact")){

        window.location.href="contact.html";

    }

});

// ---------- Right Click Disable (Optional) ----------

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

// ---------- Developer ----------

console.log("==================================");
console.log("Dhonnobad Foundation");
console.log("AI Chatbot Version 3.0");
console.log("Developer: Abdullah Al Shafi");
console.log("==================================");