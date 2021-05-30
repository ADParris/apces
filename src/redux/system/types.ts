import { ICart, ICartItem, IUser } from '../../models';

export const SystemActionTypes = {
	ADD_CART_ITEM: 'ADD_CART_ITEM',
	CLEAR_CART_ITEM: 'CLEAR_CART_ITEM',
	REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
	SET_CURRENT_USER: 'SET_CURRENT_USER',
	TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
};

export interface ISystem {
	cart: ICart;
	user: IUser;
}

export interface ISystemState {
	system: ISystem;
}

interface IAddCartItem {
	type: typeof SystemActionTypes.ADD_CART_ITEM;
	payload: ICartItem;
}

interface IClearCartItem {
	type: typeof SystemActionTypes.CLEAR_CART_ITEM;
	payload: ICartItem;
}

interface IRemoveCartItem {
	type: typeof SystemActionTypes.REMOVE_CART_ITEM;
	payload: ICartItem;
}

interface ICurrentUserAction {
	type: typeof SystemActionTypes.SET_CURRENT_USER;
	payload: IUser | null;
}

interface IToggleCartHiddenAction {
	type: typeof SystemActionTypes.TOGGLE_CART_HIDDEN;
	payload?: null;
}

export type SystemActions =
	| IAddCartItem
	| IClearCartItem
	| ICurrentUserAction
	| IRemoveCartItem
	| IToggleCartHiddenAction;
