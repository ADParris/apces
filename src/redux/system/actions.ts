import { IUser } from '../../models';
import { SystemActions, SystemActionTypes } from './types';

const setCurrentUser = (user: IUser | null): SystemActions => ({
	type: SystemActionTypes.SET_CURRENT_USER,
	payload: user,
});

export { setCurrentUser };
