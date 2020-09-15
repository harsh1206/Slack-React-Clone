import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyAG-w4pMyN4R3mMGc1NwLfxv86GXwKKwGQ",
    authDomain: "slack-react-clone-b91fd.firebaseapp.com",
    databaseURL: "https://slack-react-clone-b91fd.firebaseio.com",
    projectId: "slack-react-clone-b91fd",
    storageBucket: "slack-react-clone-b91fd.appspot.com",
    messagingSenderId: "743705480518",
    appId: "1:743705480518:web:94df8e8a0faf0f64946947",
    measurementId: "G-NSVE6RKQMW",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  // Initialize google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  // Ask user to select gmail account in a new popup window
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection("user").doc(uid);
    return userDocument;
  } catch (error) {
    console.error("Error in getUserDocument", error.message);
  }
}
