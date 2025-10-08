import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo56eQwvUhxAywUTyF_zx9TX4nHx8mgvQ",
  authDomain: "provabruno-50fcb.firebaseapp.com",
  databaseURL: "https://provabruno-50fcb-default-rtdb.firebaseio.com",
  projectId: "provabruno-50fcb",
  storageBucket: "provabruno-50fcb.firebasestorage.app",
  messagingSenderId: "763930720841",
  appId: "1:763930720841:web:43009fc103fa490a039d98",
  measurementId: "G-LKDEVL8WSK"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});