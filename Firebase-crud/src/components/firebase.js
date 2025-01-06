
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8la2OwKe6b4hNFqs63embxw7QQUlCAlU",
    authDomain: "septreact.firebaseapp.com",
    databaseURL: "https://septreact-default-rtdb.firebaseio.com",
    projectId: "septreact",
    storageBucket: "septreact.firebasestorage.app",
    messagingSenderId: "830677974171",
    appId: "1:830677974171:web:b31a6b12c800cddd4c1a3e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)