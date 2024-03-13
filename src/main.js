import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuhkWEZbsV4ThpoooWjtdWUfYMiWvWxng",
  authDomain: "enlit-fc989.firebaseapp.com",
  projectId: "enlit-fc989",
  storageBucket: "enlit-fc989.appspot.com",
  messagingSenderId: "1089950344624",
  appId: "1:1089950344624:web:9b8f77c0477ced4601e275",
  measurementId: "G-R08C6YX46M",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

// Mount the Vue app
createApp(App).use(router).provide("db", db).mount("#app");
