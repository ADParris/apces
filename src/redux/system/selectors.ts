import { createSelector } from 'reselect';
import { ISystem, ISystemState } from './types';

const _selectSystemState = (state: ISystemState): ISystem => state.system;

const selectCurrentUser = createSelector(
	[_selectSystemState],
	system => system.user
);

const _selectCartState = createSelector(
	[_selectSystemState],
	system => system.cart
);

const selectCartHidden = createSelector(
	[_selectCartState],
	cart => cart.hidden
);

export { selectCartHidden, selectCurrentUser };
