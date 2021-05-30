import { createSelector } from 'reselect';
import { RootState } from '../root_reducer';

const _selectDirectoryState = (state: RootState) => state.directory;

const selectDirectorySections = createSelector(
	[_selectDirectoryState],
	directory => directory
);

export { selectDirectorySections };
