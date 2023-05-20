// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBuFzrl3VOiDT7F778CmbnMFY_--YatYU4",
  // authDomain: "sport-car-f924a.firebaseapp.com",
  // projectId: "sport-car-f924a",
  // storageBucket: "sport-car-f924a.appspot.com",
  // messagingSenderId: "80531915592",
  // appId: "1:80531915592:web:83cac038d75055e936297d",
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_STORAGEBUCKET,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
