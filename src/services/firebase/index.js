import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBsfVjRrXtkBunmW89iACA2kvMjKFElIOQ",
  authDomain: "muscle-museum-store.firebaseapp.com",
  projectId: "muscle-museum-store",
  storageBucket: "muscle-museum-store.appspot.com",
  messagingSenderId: "870929835695",
  appId: "1:870929835695:web:40f3d6fbe420ca51c7165a"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 
