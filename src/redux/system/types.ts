import { IUser } from '../../models';

export const SystemActionTypes = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export interface ISystem {
	user: IUser;
}

export interface ISystemState {
	system: ISystem;
}

interface ICurrentUserAction {
	type: typeof SystemActionTypes.SET_CURRENT_USER;
	payload: IUser | null;
}

export type SystemActions = ICurrentUserAction;
