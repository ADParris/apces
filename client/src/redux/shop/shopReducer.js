import ShopActionTypes from './shopTypes'

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	errorMessage: undefined,
}

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ShopActionTypes.FETCH_COLLECTIONS_START:
			return { ...state, isFetching: true }
		case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
			return { ...state, isFetching: false, collections: payload }
		case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
			return { ...state, isFetching: false, errorMessage: payload }
		default:
			return state
	}
}
