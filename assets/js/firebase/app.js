// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js"
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdSiKPq2RQMccIBVGzuh4tiS1z2J8zYZI",
  authDomain: "mundo-invertido-2a162.firebaseapp.com",
  projectId: "mundo-invertido-2a162",
  storageBucket: "mundo-invertido-2a162.appspot.com",
  messagingSenderId: "581750063411",
  appId: "1:581750063411:web:b75196d4d84183d7683e46",
  measurementId: "G-F5LHRL8NDJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app);
export default app