import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAXvVDieDD4I2s8mDke8NXN4w5NmsbbCVI",
  authDomain: "hiwot-fana-app.firebaseapp.com",
  projectId: "hiwot-fana-app",
  storageBucket: "hiwot-fana-app.appspot.com",
  messagingSenderId: "220955824109",
  appId: "1:220955824109:web:c013d273d65e73494561e4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);