// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHalirB9krWwWEJydEvr4J7iG_nP-c8kI",
    authDomain: "books-b647e.firebaseapp.com",
    projectId: "books-b647e",
    storageBucket: "books-b647e.firebasestorage.app",
    messagingSenderId: "893821245206",
    appId: "1:893821245206:web:23d0dd948d682c91986237",
    measurementId: "G-YY5GEPTYPJ"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
