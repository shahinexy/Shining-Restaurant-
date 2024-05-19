
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCM_Q5IdURDaxQtfRM_gz2xW8KIKDya9k",
  authDomain: "simple-firebase-part-2.firebaseapp.com",
  projectId: "simple-firebase-part-2",
  storageBucket: "simple-firebase-part-2.appspot.com",
  messagingSenderId: "340320712302",
  appId: "1:340320712302:web:36dc247bf8dff0aa32187f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;