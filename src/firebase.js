// ./firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCfb7jGRpmghtgtzvnhYYWNGiFH8OkLm8Q",
  authDomain: "loja-virtual-3a05e.firebaseapp.com",
  projectId: "loja-virtual-3a05e",
  storageBucket: "loja-virtual-3a05e.appspot.com",
  messagingSenderId: "945353166949",
  appId: "1:945353166949:web:a2712365118ec49900768c",
  measurementId: "G-0R4RKNWBXV"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(firebaseApp);

export { auth, db }; // Asegúrate de exportar db aquí


