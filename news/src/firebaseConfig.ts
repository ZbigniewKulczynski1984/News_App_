
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh27yiElAhnPxdokn0MGoPJRM_d76diVg",
  authDomain: "react-app-5762a.firebaseapp.com",
  projectId: "react-app-5762a",
  storageBucket: "react-app-5762a.appspot.com",
  messagingSenderId: "14131514516",
  appId: "1:14131514516:web:695090cce44b84ad7c7881",
  measurementId: "G-FLS8N964PV"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);