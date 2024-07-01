// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "./config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCRIktdLpZbT6ckDb1a34HFQoUimgJImFY",
//   authDomain: "acexsports-7dcf3.firebaseapp.com",
//   projectId: "acexsports-7dcf3",
//   storageBucket: "acexsports-7dcf3.appspot.com",
//   messagingSenderId: "126767218287",
//   appId: "1:126767218287:web:95e3998400ec72a776579a",
// };
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
