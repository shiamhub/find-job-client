import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBERHdxY4_Wv4NoDsJUNLV3ylHNpUSfFOA",
//     authDomain: "new-job-find.firebaseapp.com",
//     projectId: "new-job-find",
//     storageBucket: "new-job-find.appspot.com",
//     messagingSenderId: "65287735832",
//     appId: "1:65287735832:web:e63756a96f9d406d4f516d"
// };

const app = initializeApp(firebaseConfig);

export default app