import { createSelector } from 'reselect';
import { RootState } from '../root_reducer';

const _selectShopState = (state: RootState) => state.shop;

const selectShopCollections = createSelector([_selectShopState], shop => shop);

const selectShopCollectionsForPreview = createSelector(
	[selectShopCollections],
	shopCollections =>
		Object.keys(shopCollections).map(
			key => shopCollections[key as keyof typeof shopCollections]
		)
);

const selectShopCollection = (collectionUrlParam: string) =>
	createSelector(
		[selectShopCollections],
		shopCollections =>
			shopCollections[collectionUrlParam as keyof typeof shopCollections]
	);

export {
	selectShopCollection,
	selectShopCollectionsForPreview,
	selectShopCollections,
};
