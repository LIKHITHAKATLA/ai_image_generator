
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyAbctWzOhOCgc2jl1nCLutDvph8-U6oI-8",
//     authDomain: "js-project-47f5b.firebaseapp.com",
//     projectId: "js-project-47f5b",
//     storageBucket: "js-project-47f5b.firebasestorage.app",
//     messagingSenderId: "487679614624",
//     appId: "1:487679614624:web:8870c1b43d87aa4d8fb3c5",
//     measurementId: "G-588V1E3KW3"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

// const auth = getAuth(app);

// const signupForm = document.getElementById("signup-form");

// signupForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const email = signupForm.email.value;
//   const password = signupForm.password.value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       console.log("✅ User created:", userCredential.user);
//       window.location.href = "landingpage.html";
//     })
//     .catch((error) => {
//       console.error("❌ Error creating user:", error);
//       alert(error.message);
//     });
// });


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAbctWzOhOCgc2jl1nCLutDvph8-U6oI-8",
  authDomain: "js-project-47f5b.firebaseapp.com",
  projectId: "js-project-47f5b",
  storageBucket: "js-project-47f5b.appspot.com",  // Fixed typo: ".app" ➝ ".com"
  messagingSenderId: "487679614624",
  appId: "1:487679614624:web:8870c1b43d87aa4d8fb3c5",
  measurementId: "G-588V1E3KW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("✅ User created:", userCredential.user);
      window.location.href = "landingpage.html";
    })
    .catch((error) => {
      console.error("❌ Error creating user:", error);

      if (error.code === 'auth/email-already-in-use') {
        alert("This email is already registered. Please try logging in instead.");
      } else if (error.code === 'auth/invalid-email') {
        alert("Invalid email format.");
      } else if (error.code === 'auth/weak-password') {
        alert("Password should be at least 6 characters.");
      } else {
        alert(error.message);
      }
    });
});
