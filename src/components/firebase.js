/* eslint-disable no-unused-vars */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCeEwFCFBrfotaXfGiGhMPV4P3-6VF1wy0",
  
    authDomain: "e-colon.firebaseapp.com",
  
    projectId: "e-colon",
  
    storageBucket: "e-colon.appspot.com",
  
    messagingSenderId: "726528336832",
  
    appId: "1:726528336832:web:bc314ce0282cd9ecf8de25",
  
    measurementId: "G-HLBZ9VKGY0"
  
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};