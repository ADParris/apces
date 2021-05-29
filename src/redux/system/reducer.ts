import { SystemActions, SystemActionTypes } from './types';

const INITIAL_STATE = {
	user: null,
	cart: {
		hidden: true,
	},
};

export const systemReducer = (
	state = INITIAL_STATE,
	{ type, payload }: SystemActions
) => {
	switch (type) {
		case SystemActionTypes.SET_CURRENT_USER:
			return { ...state, user: payload };
		case SystemActionTypes.TOGGLE_CART_HIDDEN:
			return { ...state, cart: { ...state.cart, hidden: !state.cart.hidden } };
		default:
			return state;
	}
};
