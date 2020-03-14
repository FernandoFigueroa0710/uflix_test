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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
