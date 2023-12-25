// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJLaILAwPyzKSyMuoGEJnUAmQShLv0cWI",
  authDomain: "task-manager-7a076.firebaseapp.com",
  projectId: "task-manager-7a076",
  storageBucket: "task-manager-7a076.appspot.com",
  messagingSenderId: "856619514335",
  appId: "1:856619514335:web:31e834ecf69196be54ac6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);