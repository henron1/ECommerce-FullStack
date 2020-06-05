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

// userAuth is the object we're getting back from the auth libary that has the UID
// in the below try catch, .set is updating the user reference
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userReference = firestore.doc(`users/${userAuth.uid}`);
	// "exists" lives on the snapshot reference
	const snapshot = await userReference.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userReference.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userReference;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// we're getting access to this provider from the auth libary
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
