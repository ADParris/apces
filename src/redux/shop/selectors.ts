import { createSelector } from 'reselect';
import { RootState } from '../root_reducer';

const _selectShopState = (state: RootState) => state.shop;

const selectShopCollections = createSelector([_selectShopState], shop => shop);

export { selectShopCollections };
