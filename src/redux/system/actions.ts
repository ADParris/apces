import { IUser } from '../../models';
import { SYSTEM, SystemActionTypes } from './types';

const setCurrentUser = (user: IUser | null): SystemActionTypes => ({
	type: SYSTEM.SET_CURRENT_USER,
	payload: user,
});

export { setCurrentUser };
