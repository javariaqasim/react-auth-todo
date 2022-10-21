// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKpZdMGb9QUd6SyovXucaxCmmfb6NqA84",
  authDomain: "web-api-d5580.firebaseapp.com",
  projectId: "web-api-d5580",
  storageBucket: "web-api-d5580.appspot.com",
  messagingSenderId: "312484006953",
  appId: "1:312484006953:web:4952e8fc0f02f65641e038",
  measurementId: "G-LE8EM9JJ2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app