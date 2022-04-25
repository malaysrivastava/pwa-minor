// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC1SYwnay0bMWnAQlEHum3p20wejzgqSV8",
  authDomain: "omsr-mklu-306913.firebaseapp.com",
  projectId: "omsr-mklu-306913",
  storageBucket: "omsr-mklu-306913.appspot.com",
  messagingSenderId: "592262482126",
  appId: "1:592262482126:web:8ff4a037ec8455ccb9689f",
  measurementId: "G-5HPYB1XTER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)