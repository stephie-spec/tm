// import * as firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';

// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import firebase from "firebase/app";
// import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBA1-30yt09z8n1GgmkQpZvWI0gO-IRYPw",
  authDomain: "tubongemental.firebaseapp.com",
  projectId: "tubongemental",
  storageBucket: "tubongemental.appspot.com",
  messagingSenderId: "64466256902",
  appId: "1:64466256902:web:5a85b822c08d706e9aaf87",
  measurementId: "G-Z6B55FCV5T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fb = firebase;
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp, fb };
