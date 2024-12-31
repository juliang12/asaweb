
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-7LQHVHPrEaOC0-x6ewLmyRGjwKEbsr4",
  authDomain: "asaweb-3b3b1.firebaseapp.com",
  projectId: "asaweb-3b3b1",
  storageBucket: "asaweb-3b3b1.appspot.com",
  messagingSenderId: "485542593291",
  appId: "1:485542593291:web:0d9070841de497a91bd80e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { auth, db, storage }