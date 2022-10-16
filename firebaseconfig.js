// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

console.log(process.env.API_KEY);
console.log(process.env.AUTH_DOMAIN);
console.log(process.env.PROJECT_ID);
console.log(process.env.STORAGE_BUCKET);
console.log(process.env.MESSAGING_SENDER_ID);
console.log(process.env.APP_ID);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnia2eYt0Ge8Td-p0_h67MScRGoyPVdRg",
  authDomain: "firechat-3e80c.firebaseapp.com",
  projectId: "firechat-3e80c",
  storageBucket: "firechat-3e80c.appspot.com",
  messagingSenderId: "943221769357",
  appId: "1:943221769357:web:d2594d09c191d4e609cec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });

export { auth, db };
