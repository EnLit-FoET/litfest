import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAuhkWEZbsV4ThpoooWjtdWUfYMiWvWxng",
  authDomain: "enlit-fc989.firebaseapp.com",
  projectId: "enlit-fc989",
  storageBucket: "enlit-fc989.appspot.com",
  messagingSenderId: "1089950344624",
  appId: "1:1089950344624:web:9b8f77c0477ced4601e275",
  measurementId: "G-R08C6YX46M"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };