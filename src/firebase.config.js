// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNBKGuhZ3NUUMO3erLnRm8TUeaFYIF2m0",
  authDomain: "tourist-guide-92aa4.firebaseapp.com",
  projectId: "tourist-guide-92aa4",
  storageBucket: "tourist-guide-92aa4.appspot.com",
  messagingSenderId: "39127942387",
  appId: "1:39127942387:web:b412b3c04452a2b9c96386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app