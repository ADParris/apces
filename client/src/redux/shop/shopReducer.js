import ShopActionTypes from './shopTypes'

const INITIAL_STATE = { collections: null }

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return { ...state, collections: payload }
		default:
			return state
	}
}
