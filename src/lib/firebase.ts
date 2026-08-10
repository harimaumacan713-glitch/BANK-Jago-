import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getDatabase, Database } from "firebase/database";

const firebaseConfig = {
  apiKey: (import.meta as any).env?.VITE_FIREBASE_API_KEY || "AIzaSyB1234567890abcdefghijklmnopqrstuv",
  projectId: "brusa-crypto-garuda",
  authDomain: "brusa-crypto-garuda.firebaseapp.com",
  databaseURL: "https://brusa-crypto-garuda-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "brusa-crypto-garuda.firebasestorage.app",
  messagingSenderId: "163946023429",
  appId: "1:163946023429:web:bb816e6bbac01f3638ea6c"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let auth: Auth | null = null;
try {
  auth = getAuth(app);
} catch (e) {
  console.warn("Firebase Auth initialization skipped:", e);
}

export { auth };
export const db: Database = getDatabase(app);
export const DB_URL = firebaseConfig.databaseURL;
