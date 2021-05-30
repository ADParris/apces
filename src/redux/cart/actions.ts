import { CartActions, CartActionTypes, ICartItem } from './types';

const addCartItem = (item: ICartItem): CartActions => ({
	type: CartActionTypes.ADD_CART_ITEM,
	payload: item,
});

const clearCartItem = (item: ICartItem): CartActions => ({
	type: CartActionTypes.CLEAR_CART_ITEM,
	payload: item,
});

const removeCartItem = (item: ICartItem): CartActions => ({
	type: CartActionTypes.REMOVE_CART_ITEM,
	payload: item,
});

const toggleCartHidden = (): CartActions => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export { addCartItem, clearCartItem, removeCartItem, toggleCartHidden };
