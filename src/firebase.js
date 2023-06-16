// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5jTU8ruhsUcez9fnqIpf0JT0WbhEyYe0",
  authDomain: "project-react-1420e.firebaseapp.com",
  databaseURL: "https://project-react-1420e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-react-1420e",
  storageBucket: "project-react-1420e.appspot.com",
  messagingSenderId: "681370781919",
  appId: "1:681370781919:web:a5029e059af51d6160c16a",
  measurementId: "G-XSRH9DRZ75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app
