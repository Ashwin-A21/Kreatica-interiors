// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaT1Xn5psoCu19AfRz8mLaQRzfxIY9WFM",
  authDomain: "kreatica-interiors.firebaseapp.com",
  projectId: "kreatica-interiors",
  storageBucket: "kreatica-interiors.firebasestorage.app",
  messagingSenderId: "183691066680",
  appId: "1:183691066680:web:24058aeafdb55f08e655cd",
  measurementId: "G-F8VNDC2LQT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
