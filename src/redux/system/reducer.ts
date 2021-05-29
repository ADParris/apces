import { ICartItem } from '../../models';
import { SystemActions, SystemActionTypes } from './types';
import { addItemToCart } from './utils';

const INITIAL_STATE = {
	user: null,
	cart: {
		hidden: true,
		items: [],
	},
};

export const systemReducer = (
	state = INITIAL_STATE,
	{ type, payload }: SystemActions
) => {
	switch (type) {
		case SystemActionTypes.ADD_CART_ITEM:
			return {
				...state,
				cart: {
					...state.cart,
					items: addItemToCart(state.cart.items, payload as ICartItem),
				},
			};
		case SystemActionTypes.SET_CURRENT_USER:
			return { ...state, user: payload };
		case SystemActionTypes.TOGGLE_CART_HIDDEN:
			return { ...state, cart: { ...state.cart, hidden: !state.cart.hidden } };
		default:
			return state;
	}
};
