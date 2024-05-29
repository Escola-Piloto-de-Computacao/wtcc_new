import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
};

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: "ix-wtcc.firebaseapp.com",
    projectId: "ix-wtcc",
    storageBucket: "ix-wtcc.appspot.com",
    messagingSenderId: process.env.SENDERID,
    appId: process.env.APPID
};

const firebase = initializeApp(firebaseConfig);

const firestore = getFirestore(firebase);
export { firestore };