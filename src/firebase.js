import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// other services is needed



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtCaQFY51EPj5qgWlyNpWZLChf1UJ1h9E",
    authDomain: "facebook-clone-e4c49.firebaseapp.com",
    projectId: "facebook-clone-e4c49",
    storageBucket: "facebook-clone-e4c49.appspot.com",
    messagingSenderId: "882927377165",
    appId: "1:882927377165:web:36164d710b4e08d36b2e44",
    measurementId: "G-88W08P19ZT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); //tell firebase we want the google login services

  export {auth, provider};
  export default db;
