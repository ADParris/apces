import CartActionTypes from './cartTypes'

import { addItemToCart } from './cartUtils'

const INITIAL_STATE = { cartItems: [], hidden: true }

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden }
		case CartActionTypes.ADD_ITEM:
			return { ...state, cartItems: addItemToCart(state.cartItems, payload) }
		default:
			return state
	}
}
