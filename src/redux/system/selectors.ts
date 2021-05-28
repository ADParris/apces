import { createSelector } from 'reselect';
import { ISystem, ISystemState } from './types';

const _selectSystem = (state: ISystemState): ISystem => state.system;

const selectCurrentUser = createSelector(
	[_selectSystem],
	system => system.user
);

export { selectCurrentUser };
