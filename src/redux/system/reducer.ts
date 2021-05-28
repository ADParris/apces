import { SYSTEM, SystemActionTypes } from './types';

const INITIAL_STATE = {
	user: null,
};

export const systemReducer = (
	state = INITIAL_STATE,
	{ type, payload }: SystemActionTypes
) => {
	switch (type) {
		case SYSTEM.SET_CURRENT_USER:
			return { ...state, user: payload };
		default:
			return state;
	}
};
