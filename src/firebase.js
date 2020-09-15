import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyAG-w4pMyN4R3mMGc1NwLfxv86GXwKKwGQ",
    authDomain: "slack-react-clone-b91fd.firebaseapp.com",
    databaseURL: "https://slack-react-clone-b91fd.firebaseio.com",
    projectId: "slack-react-clone-b91fd",
    storageBucket: "slack-react-clone-b91fd.appspot.com",
    messagingSenderId: "743705480518",
    appId: "1:743705480518:web:94df8e8a0faf0f64946947",
    measurementId: "G-NSVE6RKQMW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  
export const auth = firebase.auth();

export const signInwithGoogle = () =>{
      
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);

}