// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Realtime Database
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Analytics (Optional)
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAy0cfJ7b7BaNaqrlRjnPi_MHcxDIodI5Y",
  authDomain: "myform-ddb68.firebaseapp.com",
  databaseURL: "https://myform-ddb68-default-rtdb.firebaseio.com",
  projectId: "myform-ddb68",
  storageBucket: "myform-ddb68.firebasestorage.app",
  messagingSenderId: "547464768236",
  appId: "1:547464768236:web:4546dadbefdc94062993c9",
  measurementId: "G-WCXCDL4HWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const database = getDatabase(app);
const auth = getAuth(app);

// Analytics (ঐচ্ছিক)
let analytics;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // Analytics না চললেও সমস্যা নেই
}

// Export
export { app, database, auth };