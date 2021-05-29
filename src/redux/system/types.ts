import { ICart, IUser } from '../../models';

export const SystemActionTypes = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
	TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
};

export interface ISystem {
	cart: ICart;
	user: IUser;
}

export interface ISystemState {
	system: ISystem;
}

interface ICurrentUserAction {
	type: typeof SystemActionTypes.SET_CURRENT_USER;
	payload: IUser | null;
}

interface IToggleCartHiddenAction {
	type: typeof SystemActionTypes.TOGGLE_CART_HIDDEN;
	payload?: null;
}

export type SystemActions = ICurrentUserAction | IToggleCartHiddenAction;
