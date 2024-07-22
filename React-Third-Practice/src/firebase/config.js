// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Permite obtener la base de datos de Firestore de cualquier proyecto que se tenga configurado en firebaseConfig
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd9SAOMIlTqQQ4pldRgNUrhkGyNnLxC0k",
  authDomain: "e-commerce-5a8d0.firebaseapp.com",
  projectId: "e-commerce-5a8d0",
  storageBucket: "e-commerce-5a8d0.appspot.com",
  messagingSenderId: "1031723396582",
  appId: "1:1031723396582:web:7a4afdf9ef68110fe9ba27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Obtener la base de datos
export const db = getFirestore(app);