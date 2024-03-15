import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAzu1IRkZJ47f0F5VD_TMqLvlVYpo-bwgk",
  authDomain: "rpro-5f5eb.firebaseapp.com",
  projectId: "rpro-5f5eb",
  storageBucket: "rpro-5f5eb.appspot.com",
  messagingSenderId: "1046131620598",
  appId: "1:1046131620598:web:cdf5d32301c9c32a348ad7"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)