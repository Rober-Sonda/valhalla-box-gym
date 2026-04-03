import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAtgrCrXy0-3RiEq9KPLRHnS5xw20u6zLA",
  authDomain: "valhalla-box-gym-app.firebaseapp.com",
  projectId: "valhalla-box-gym-app",
  storageBucket: "valhalla-box-gym-app.firebasestorage.app",
  messagingSenderId: "304953173191",
  appId: "1:304953173191:web:60c58812478a2524890ae2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
