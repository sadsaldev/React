// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Permite obtener la base de datos de Firestore de cualquier proyecto que se tenga configurado en firebaseConfig
import { getFirestore } from "firebase/firestore";
//Importar la librería para la autenticación
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Obtener la base de datos
export const db = getFirestore(app);

//Obtener el auth
export const auth = getAuth(app);
