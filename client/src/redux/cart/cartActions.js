import CartActionTypes from './cartTypes'

export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
})

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
})
