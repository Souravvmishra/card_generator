// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ6tBy8eOSb9xXW9c54qiurQXBDHZ437k",
  authDomain: "cardgenerator02.firebaseapp.com",
  projectId: "cardgenerator02",
  storageBucket: "cardgenerator02.appspot.com",
  messagingSenderId: "694295234960",
  appId: "1:694295234960:web:7e9187f3d441cd9816cb15",
  measurementId: "G-GWS556FTSY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);