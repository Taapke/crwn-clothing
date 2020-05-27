import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth' ;

const config = {
    apiKey: "AIzaSyBBk5PTawLq7yg86PHk6XBIGl71jaGAB3k",
    authDomain: "crwn-db-5f707.firebaseapp.com",
    databaseURL: "https://crwn-db-5f707.firebaseio.com",
    projectId: "crwn-db-5f707",
    storageBucket: "crwn-db-5f707.appspot.com",
    messagingSenderId: "439598616014",
    appId: "1:439598616014:web:068a5e1db70cc0c365af9f",
    measurementId: "G-3354RQ7V01"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


