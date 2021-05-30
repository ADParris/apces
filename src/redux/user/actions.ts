import { IUser } from '../../models';
import { UserActions, UserActionTypes } from './types';

const setCurrentUser = (user: IUser | null): UserActions => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});

export { setCurrentUser };
