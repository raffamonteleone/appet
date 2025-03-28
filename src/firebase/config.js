import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


    const firebaseConfig = {
        apiKey: "AIzaSyDQ9ijmWrJ8Q5IBWkxE0y1pLhpBxZmwGI0",
        authDomain: "aghata-52496.firebaseapp.com",
        projectId: "aghata-52496",
        storageBucket: "aghata-52496.firebasestorage.app",
        messagingSenderId: "446553403862",
        appId: "1:446553403862:web:0d83afebcc25f7254b3477",
        measurementId: "G-RK64NS2XLX"
      };
   
    

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);


