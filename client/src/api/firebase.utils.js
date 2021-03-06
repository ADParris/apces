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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()
		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData })
		} catch (err) {
			console.log(`Error creating user... ${err.message}`)
		}
	}

	return userRef
}

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data()
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		}
	})
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection
		return accumulator
	}, {})
}

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey)

	const batch = firestore.batch()
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, obj)
	})
	return await batch.commit()
}

export const firestore = firebase.firestore()
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
