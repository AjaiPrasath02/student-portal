import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNsbC3c9lcWqIXW3C_FIQHjpRqaJMMQdU",
  authDomain: "student-result-16c86.firebaseapp.com",
  projectId: "student-result-16c86",
  storageBucket: "student-result-16c86.appspot.com",
  messagingSenderId: "858743032027",
  appId: "1:858743032027:web:2ec17c59abe0bd245964fe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { app , db, auth}

