import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
};

const firebaseConfig = {
    apiKey: "AIzaSyDNZ6ZwWLU38eyjALMscrWJKQYMPEFTZng",
    authDomain: "ix-wtcc.firebaseapp.com",
    projectId: "ix-wtcc",
    storageBucket: "ix-wtcc.appspot.com",
    messagingSenderId: "349785809306",
    appId: "1:349785809306:web:fdca7a976cf22207d79a23"
};

const firebase = initializeApp(firebaseConfig);

const firestore = getFirestore(firebase);
export { firestore };