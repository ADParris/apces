import { createSelector } from 'reselect';
import { RootState } from '../root_reducer';
import { IUserState } from './types';

const _selectUserState = (state: RootState): IUserState => state.user;

const selectCurrentUser = createSelector([_selectUserState], user => user);

export { selectCurrentUser };
