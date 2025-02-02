
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAm6L5jAp9hqRmMM8p41_Axx4SmiBLUKyw",
  authDomain: "reactauth-39f02.firebaseapp.com",
  projectId: "reactauth-39f02",
  storageBucket: "reactauth-39f02.firebasestorage.app",
  messagingSenderId: "996382698611",
  appId: "1:996382698611:web:b79e14b6b4384846b4ce06"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
