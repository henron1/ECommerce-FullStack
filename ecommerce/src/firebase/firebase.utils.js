// base import give us access to store and auth
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAEyUnl1dRnA4hJv_WlUAzmVL9sjBCSUC8",
	authDomain: "bookstore-950a9.firebaseapp.com",
	databaseURL: "https://bookstore-950a9.firebaseio.com",
	projectId: "bookstore-950a9",
	storageBucket: "bookstore-950a9.appspot.com",
	messagingSenderId: "1018647076798",
	appId: "1:1018647076798:web:b8c419d8589f218e7fe3ef",
	measurementId: "G-GW6GVN20N0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// we're getting access to this provider from the auth libary
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
