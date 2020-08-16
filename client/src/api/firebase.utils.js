import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyCspkVQAjqNGjTScdn8nbb6jIvC9aD6xpw',
	authDomain: 'apces-2020.firebaseapp.com',
	databaseURL: 'https://apces-2020.firebaseio.com',
	projectId: 'apces-2020',
	storageBucket: 'apces-2020.appspot.com',
	messagingSenderId: '825226942891',
	appId: '1:825226942891:web:2aec2cc90920fb10c5daee',
	measurementId: 'G-LDXXCRLZKB',
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
