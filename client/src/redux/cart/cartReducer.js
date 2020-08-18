import CartActionTypes from './cartTypes'

const INITIAL_STATE = { hidden: true }

export default (state = INITIAL_STATE, { type }) => {
	switch (type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden }
		default:
			return state
	}
}
