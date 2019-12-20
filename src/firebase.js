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
  export const auth =  firebase.auth()
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export const signOut = () => auth.signOut();

////////////////////////////////////////////////////////////
///// *** USER PROFILE Section *********************///////

export const createUserProfileDocument = async (user, additionalData) => {
  if(!user) return;
  //get a reference in db where the user profile might be
  const userRef = firestore.doc(`users/${user.uid}`);
  //fetch document from the user reference
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email, photoURL} = user;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      })
    }catch(err){
      console.error('Error creating user ', err);
    }
  }

  return getUserDocument(user.uid);
};

//fetch a single user
export const getUserDocument = async (uid) => {
  if(!uid) return null;
  try{
    const userDocument = await firestore.collection('users').doc(uid).get();
    console.log(userDocument.data());
    return {
      uid,
      ...userDocument.data(),
    }
  }catch(err){
    console.error('Error fetching user ', err);
  }
}