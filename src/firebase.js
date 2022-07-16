import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZItLU9D_xVL6rCvyBr1pRG_U4FwofLPw",
    authDomain: "slack-clone-72502.firebaseapp.com",
    projectId: "slack-clone-72502",
    storageBucket: "slack-clone-72502.appspot.com",
    messagingSenderId: "524112136628",
    appId: "1:524112136628:web:7ca2c2ef3b68fd21a24ae1",
    measurementId: "G-WD47G61LM8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;