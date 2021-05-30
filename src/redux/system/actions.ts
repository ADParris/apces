import { ICartItem, IUser } from '../../models';
import { SystemActions, SystemActionTypes } from './types';

const addCartItem = (item: ICartItem): SystemActions => ({
	type: SystemActionTypes.ADD_CART_ITEM,
	payload: item,
});

const clearCartItem = (item: ICartItem): SystemActions => ({
	type: SystemActionTypes.CLEAR_CART_ITEM,
	payload: item,
});

const removeCartItem = (item: ICartItem): SystemActions => ({
	type: SystemActionTypes.REMOVE_CART_ITEM,
	payload: item,
});

const setCurrentUser = (user: IUser | null): SystemActions => ({
	type: SystemActionTypes.SET_CURRENT_USER,
	payload: user,
});

const toggleCartHidden = (): SystemActions => ({
	type: SystemActionTypes.TOGGLE_CART_HIDDEN,
});

export {
	addCartItem,
	clearCartItem,
	removeCartItem,
	setCurrentUser,
	toggleCartHidden,
};
