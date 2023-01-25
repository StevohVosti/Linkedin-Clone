import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6Q_sBSAMD5ekzyhxG7Rhny6DSSdtXr-I",
  authDomain: "linkedin-clone-40116.firebaseapp.com",
  projectId: "linkedin-clone-40116",
  storageBucket: "linkedin-clone-40116.appspot.com",
  messagingSenderId: "753469133068",
  appId: "1:753469133068:web:8db55aba1e5f95ff977929"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);