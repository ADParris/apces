import CartActionTypes from './cartTypes'

import {
	addItemToCart,
	clearItemFromCart,
	removeItemFromCart,
} from './cartUtils'

const INITIAL_STATE = { cartItems: [], hidden: true }

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden }
		case CartActionTypes.ADD_ITEM:
			return { ...state, cartItems: addItemToCart(state.cartItems, payload) }
		case CartActionTypes.CLEAR_ITEM:
			return {
				...state,
				cartItems: clearItemFromCart(state.cartItems, payload),
			}
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, payload),
			}
		default:
			return state
	}
}
