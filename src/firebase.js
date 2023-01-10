import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeDLnHnuc-xkA9tyA3pSDfORVRidwZ7Aw",
    authDomain: "twitter-clone-beffc.firebaseapp.com",
    projectId: "twitter-clone-beffc",
    storageBucket: "twitter-clone-beffc.appspot.com",
    messagingSenderId: "127697938796",
    appId: "1:127697938796:web:d20cb3e1810e9558426b49",
    measurementId: "G-D3NBHYLDH1"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;