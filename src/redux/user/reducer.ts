import { UserActions, UserActionTypes } from './types';

const INITIAL_STATE = null;

export const userReducer = (
	state = INITIAL_STATE,
	{ type, payload }: UserActions
) => {
	switch (type) {
		case UserActionTypes.SET_CURRENT_USER:
			return payload;
		default:
			return state;
	}
};
