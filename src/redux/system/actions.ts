import { IUser } from '../../models';
import { SystemActions, SystemActionTypes } from './types';

const setCurrentUser = (user: IUser | null): SystemActions => ({
	type: SystemActionTypes.SET_CURRENT_USER,
	payload: user,
});

const toggleCartHidden = (): SystemActions => ({
	type: SystemActionTypes.TOGGLE_CART_HIDDEN,
});

export { setCurrentUser, toggleCartHidden };
