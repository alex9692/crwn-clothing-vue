import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAX2U2qpjL30xDL1zXgCArMjlB2v9hzu4Q",
  authDomain: "crwn-clothing-vue.firebaseapp.com",
  databaseURL: "https://crwn-clothing-vue.firebaseio.com",
  projectId: "crwn-clothing-vue",
  storageBucket: "crwn-clothing-vue.appspot.com",
  messagingSenderId: "262325719268",
  appId: "1:262325719268:web:013f9d784e157e74ca1cf1",
  measurementId: "G-Y2BE905DF0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
