// Import the functions you need from the SDKs you need
import firebase from '../../../Kongossa/webadmin/node_modules/firebase';
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAuDVZINLpPd6iza8Ws5StwLbLMHXPqi4",
  authDomain: "gestion-etablissement-scolaire.firebaseapp.com",
  projectId: "gestion-etablissement-scolaire",
  storageBucket: "gestion-etablissement-scolaire.appspot.com",
  messagingSenderId: "209325850040",
  appId: "1:209325850040:web:bfe5b2a8d167c71d2f234d",
  measurementId: "G-ZY4RSH4KZB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase