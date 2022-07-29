import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAY5etQXTd2H29pyGsxfIwQmCzoRZMSHSY",
    authDomain: "firechat-fff9a.firebaseapp.com",
    projectId: "firechat-fff9a",
    storageBucket: "firechat-fff9a.appspot.com",
    messagingSenderId: "710643005471",
    appId: "1:710643005471:web:e7018e5c772a65683bfd2a",
    measurementId: "G-M0F35HD759"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }