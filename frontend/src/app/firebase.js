
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOc6Z-lzlfBQoMFtRyBnIDpvG2Efl2t1s",
  authDomain: "buzzer-5d69b.firebaseapp.com",
  projectId: "buzzer-5d69b",
  storageBucket: "buzzer-5d69b.appspot.com",
  messagingSenderId: "618249161574",
  appId: "1:618249161574:web:526a5998bfec856dd096a7",
  measurementId: "G-RBQZKPB120",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
