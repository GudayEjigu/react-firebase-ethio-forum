import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBq3phUP2F86ZRtFRvj1sxsEuML7ALuTQE",
  authDomain: "habeshashop-8026e.firebaseapp.com",
  projectId: "habeshashop-8026e",
  storageBucket: "habeshashop-8026e.appspot.com",
  messagingSenderId: "316041217544",
  appId: "1:316041217544:web:990b0c3a523eb762dbf3bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
