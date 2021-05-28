import { firebase } from '../firebase_init';
import 'firebase/firestore';

import { IUser, IUserName } from '../../components/models';

const db = firebase.firestore();
const collectionRef = db.collection('users');

interface IUserProps {
	user: firebase.User;
	name?: string;
}

const _createUserNameObj = ({ user, name }: IUserProps): IUserName => {
	const userName = {} as IUserName;
	name = name ? name : user.displayName ? user.displayName : undefined;
	if (name) userName.full = name;
	const firstName = name?.split(' ')[0];
	if (firstName) userName.first = firstName;

	return userName;
};

const _createUserObj = ({ user, name }: IUserProps): IUser => {
	const userName = _createUserNameObj({ user, name });
	const newUser: IUser = {
		createdAt: new Date(),
	};
	if (user.email) newUser.email = user.email;
	if (userName) newUser.name = userName;
	if (user.photoURL) newUser.image = user.photoURL;

	return newUser;
};

const _createNewUser = async ({ user, name }: IUserProps): Promise<void> => {
	const documentRef = collectionRef.doc(user.uid);
	const newUser = _createUserObj({ user, name });

	try {
		await documentRef.set(newUser);
	} catch (err) {
		throw err.message;
	}
};

const _retrieveUser = async (userId: string): Promise<IUser> => {
	const documentRef = collectionRef.doc(userId);

	try {
		const snapshot = await documentRef.get();
		return { id: snapshot.id, ...snapshot.data() };
	} catch (err) {
		throw err.message;
	}
};

const getCurrentUser = async ({
	user,
	name,
}: IUserProps): Promise<IUser | null> => {
	const documentRef = collectionRef.doc(user.uid);

	try {
		const snapshot = await documentRef.get();
		if (snapshot.exists) {
			return await _retrieveUser(user.uid);
		} else {
			_createNewUser({ user, name });
			return null;
		}
	} catch (err) {
		throw err.message;
	}
};

export { getCurrentUser };
