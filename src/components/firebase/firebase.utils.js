import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAGsytAb83acxjLwq43asy_e0-OaaGxJ5M",
	authDomain: "uflix-test.firebaseapp.com",
	databaseURL: "https://uflix-test.firebaseio.com",
	projectId: "uflix-test",
	storageBucket: "uflix-test.appspot.com",
	messagingSenderId: "701813824350",
	appId: "1:701813824350:web:c3a6e0ee5efd1838178dcf",
	measurementId: "G-LWL90YFN1K"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email, photoURL } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				photoURL,
				...additionalData
			});
		} catch (error) {
			console.log("Error creating user", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
