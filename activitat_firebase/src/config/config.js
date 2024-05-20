// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoWQg5YQmVSd04D93aaCVZOojFhP0_WNQ",
  authDomain: "fir-app-ee810.firebaseapp.com",
  projectId: "fir-app-ee810",
  storageBucket: "fir-app-ee810.appspot.com",
  messagingSenderId: "341921944921",
  appId: "1:341921944921:web:81b8e1c6575ec2d578e848",
  measurementId: "G-EKHSKJ819S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
