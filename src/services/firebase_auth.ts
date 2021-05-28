import { firebase } from './firebase_init';
import 'firebase/auth';

const auth = firebase.auth;

const provider = new auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const createUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	try {
		const { user } = await auth().createUserWithEmailAndPassword(
			email,
			password
		);
		return user;
	} catch (err) {
		console.log(err.message);
	}
};

const signInWithEmailAndPassword = async (email: string, password: string) => {
	try {
		const { user } = await auth().signInWithEmailAndPassword(email, password);
		return user;
	} catch (err) {
		console.log(err.message);
	}
};

const signInWithGoogle = () => auth().signInWithPopup(provider);

export {
	auth,
	createUserWithEmailAndPassword,
	firebase,
	signInWithEmailAndPassword,
	signInWithGoogle,
};
