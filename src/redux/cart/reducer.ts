import { CartActions, CartActionTypes, ICartItem } from './types';
import { addRemoveOrClearItem } from './utils';

const INITIAL_STATE = {
	hidden: true,
	items: [],
};

export const cartReducer = (
	state = INITIAL_STATE,
	{ type, payload }: CartActions
) => {
	switch (type) {
		case CartActionTypes.ADD_CART_ITEM:
			return {
				...state,
				items: addRemoveOrClearItem('add', state.items, payload as ICartItem),
			};
		case CartActionTypes.CLEAR_CART_ITEM:
			return {
				...state,
				items: addRemoveOrClearItem('clear', state.items, payload as ICartItem),
			};
		case CartActionTypes.REMOVE_CART_ITEM:
			return {
				...state,
				items: addRemoveOrClearItem(
					'remove',
					state.items,
					payload as ICartItem
				),
			};
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };
		default:
			return state;
	}
};
