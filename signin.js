// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAbctWzOhOCgc2jl1nCLutDvph8-U6oI-8",
  authDomain: "js-project-47f5b.firebaseapp.com",
  projectId: "js-project-47f5b",
  storageBucket: "js-project-47f5b.appspot.com",  // Fixed `.app` → `.appspot.com`
  messagingSenderId: "487679614624",
  appId: "1:487679614624:web:8870c1b43d87aa4d8fb3c5",
  measurementId: "G-588V1E3KW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Login
const submit1 = document.getElementById("submit1"); // Corrected ID
submit1.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Redirect to landing page
      window.location.href = "landingpage.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Forgot Password
const forget1 = document.getElementById("forget1");
forget1.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent!");
    })
    .catch((error) => {
      alert(error.message);
    });
});
