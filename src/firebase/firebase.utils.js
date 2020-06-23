import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
   
        apiKey: "AIzaSyC4_7pc-9LuC1zkDyzbFWYDkSFz2xEzXpM",
        authDomain: "my-db-148f8.firebaseapp.com",
        databaseURL: "https://my-db-148f8.firebaseio.com",
        projectId: "my-db-148f8",
        storageBucket: "my-db-148f8.appspot.com",
        messagingSenderId: "498944279726",
        appId: "1:498944279726:web:ffd81edda94f4d526dd93f",
        measurementId: "G-FG6Z6D7G12"
      };

firebase.initializeApp(config);


export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;



