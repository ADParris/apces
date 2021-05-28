import { firebase } from './firebase_init';
import 'firebase/auth';

const auth = firebase.auth;

const provider = new auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth().signInWithPopup(provider);

export { auth, firebase, signInWithGoogle };
