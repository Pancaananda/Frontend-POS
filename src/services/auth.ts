import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export const register = async (email: string, password: string) => {
    return await auth.createUserWithEmailAndPassword(email, password);
};

export const login = async (email: string, password: string) => {
    return await auth.signInWithEmailAndPassword(email, password);
};

export const logout = async () => {
    return await auth.signOut();
};

export const onAuthStateChanged = (callback: (user: firebase.User | null) => void) => {
    return auth.onAuthStateChanged(callback);
};