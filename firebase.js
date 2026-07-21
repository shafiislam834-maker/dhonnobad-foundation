// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);