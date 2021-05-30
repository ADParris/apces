import { createSelector } from 'reselect';
import { RootState } from '../root_reducer';
import { ICartState } from './types';

const _selectCartState = (state: RootState): ICartState => state.cart;

const selectCartHidden = createSelector(
	[_selectCartState],
	cart => cart.hidden
);

const selectCartItems = createSelector([_selectCartState], cart => cart.items);

const selectCartItemsCount = createSelector([selectCartItems], items =>
	items.reduce((accumulatedQuantity, item) => {
		const quantity = item.quantity ?? 0;
		return accumulatedQuantity + quantity;
	}, 0)
);

const selectCartTotal = createSelector([selectCartItems], items =>
	items.reduce((accumulatedTotal, item) => {
		const quantity = item.quantity ?? 0;
		return accumulatedTotal + quantity * item.price;
	}, 0)
);

export {
	selectCartHidden,
	selectCartItems,
	selectCartItemsCount,
	selectCartTotal,
};
