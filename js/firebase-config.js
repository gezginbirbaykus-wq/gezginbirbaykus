// Firebase yapılandırması
// Bu değerleri Firebase Console'dan alacaksın (kurulum adımlarında anlatacağım)

const firebaseConfig = {
  apiKey: "AIzaSyByk6Pf-fEM3B8o6P8_fixsc5LHNYe6YbU",
  authDomain: "gezginbirbaykus-ebe9a.firebaseapp.com",
  projectId: "gezginbirbaykus-ebe9a",
  storageBucket: "gezginbirbaykus-ebe9a.firebasestorage.app",
  messagingSenderId: "302726013572",
  appId: "1:302726013572:web:cb0141dbfa8a8aa881d8d1",
  measurementId: "G-HW95FGW8Y3"
};

// Firebase'i başlat
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
