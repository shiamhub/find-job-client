// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGBEkDMIXeXHCv80rVhF_VJvt_1MuwP3A",
  authDomain: "jobfind-4aa18.firebaseapp.com",
  projectId: "jobfind-4aa18",
  storageBucket: "jobfind-4aa18.appspot.com",
  messagingSenderId: "1009057097938",
  appId: "1:1009057097938:web:48dce919949813e4b6650b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app