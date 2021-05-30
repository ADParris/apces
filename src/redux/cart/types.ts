import { IProduct } from '../../models';

export const CartActionTypes = {
	ADD_CART_ITEM: 'ADD_CART_ITEM',
	CLEAR_CART_ITEM: 'CLEAR_CART_ITEM',
	REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
	TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
};

export interface ICartItem extends IProduct {
	quantity?: number;
}

export interface ICartState {
	hidden: boolean;
	items: ICartItem[];
}

interface IAddCartItem {
	type: typeof CartActionTypes.ADD_CART_ITEM;
	payload: ICartItem;
}

interface IClearCartItem {
	type: typeof CartActionTypes.CLEAR_CART_ITEM;
	payload: ICartItem;
}

interface IRemoveCartItem {
	type: typeof CartActionTypes.REMOVE_CART_ITEM;
	payload: ICartItem;
}

interface IToggleCartHiddenAction {
	type: typeof CartActionTypes.TOGGLE_CART_HIDDEN;
	payload?: null;
}

export type CartActions =
	| IAddCartItem
	| IClearCartItem
	| IRemoveCartItem
	| IToggleCartHiddenAction;
