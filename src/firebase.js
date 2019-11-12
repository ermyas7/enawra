import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBM5TkcF0RNousp46CZdKtgfC31DHad_Kw",
    authDomain: "enchawet-38e0f.firebaseapp.com",
    databaseURL: "https://enchawet-38e0f.firebaseio.com",
    projectId: "enchawet-38e0f",
    storageBucket: "enchawet-38e0f.appspot.com",
    messagingSenderId: "790188187442",
    appId: "1:790188187442:web:b5f51a6b8b6986dda2812b",
    measurementId: "G-KP80251WY7"
  };

  firebase.initializeApp(firebaseConfig);
  window.firebase = firebase;
  //database
  export const firestore = firebase.firestore();
  
//authentication
  export const auth = firebase.auth()
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
