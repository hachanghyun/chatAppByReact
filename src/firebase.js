  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import "firebase/auth";
  import "firebase/database";
  import "firebase/storage";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBp-X18RfrJq3bP6gfye9ddRBSrb8yDHXU",
    authDomain: "react-firebase-chat-app-6bf72.firebaseapp.com",
    projectId: "react-firebase-chat-app-6bf72",
    storageBucket: "react-firebase-chat-app-6bf72.appspot.com",
    messagingSenderId: "841972348094",
    appId: "1:841972348094:web:e2d2c9c6a5331f9e919aef",
    measurementId: "G-WYRWG1L20Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);