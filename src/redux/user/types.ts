import { IUser } from '../../models';

export const UserActionTypes = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export interface IUserState {
	user: IUser;
}

interface ICurrentUserAction {
	type: typeof UserActionTypes.SET_CURRENT_USER;
	payload: IUser | null;
}

export type UserActions = ICurrentUserAction;
