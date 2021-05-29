import { SystemActions, SystemActionTypes } from './types';

const INITIAL_STATE = {
	user: null,
};

export const systemReducer = (
	state = INITIAL_STATE,
	{ type, payload }: SystemActions
) => {
	switch (type) {
		case SystemActionTypes.SET_CURRENT_USER:
			return { ...state, user: payload };
		default:
			return state;
	}
};
