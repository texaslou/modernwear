import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBSU-UzLF4q3nWrvKNiGovAoV-85hjey1M",
    authDomain: "modernwear-35d51.firebaseapp.com",
    projectId: "modernwear-35d51",
    storageBucket: "modernwear-35d51.appspot.com",
    messagingSenderId: "985373935938",
    appId: "1:985373935938:web:7827591c5df3a7eb3560db",
    measurementId: "G-L553X3E1EZ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;

  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;


