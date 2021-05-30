import { ICartItem } from '../../models';

const _addOrRemoveCartItem = (
	addOrRemove: string,
	currentCartItems: ICartItem[],
	item: ICartItem
) => {
	const _returnCartItem = (cartItem: ICartItem) =>
		addOrRemove === 'add'
			? { ...cartItem, quantity: cartItem.quantity! + 1 }
			: { ...cartItem, quantity: cartItem.quantity! - 1 };

	return currentCartItems.map(cartItem =>
		cartItem.id === item.id ? _returnCartItem(cartItem) : cartItem
	);
};

const _filterCartItems = (
	currentCartItems: ICartItem[],
	itemToFilter: ICartItem
) => currentCartItems.filter(cartItem => cartItem.id !== itemToFilter.id);

const addRemoveOrClearItem = (
	addOrRemove: string,
	currentCartItems: ICartItem[],
	item: ICartItem
) => {
	const existingCartItem = currentCartItems.find(
		cartItem => cartItem.id === item.id
	);

	if (addOrRemove === 'add') {
		if (existingCartItem) {
			return _addOrRemoveCartItem('add', currentCartItems, item);
		}
		return [...currentCartItems, { ...item, quantity: 1 }];
	} else if (addOrRemove === 'remove') {
		if (existingCartItem?.quantity === 1) {
			return _filterCartItems(currentCartItems, item);
		}
		return _addOrRemoveCartItem('remove', currentCartItems, item);
	}
	return _filterCartItems(currentCartItems, item);
};

export { addRemoveOrClearItem };
