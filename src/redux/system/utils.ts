import { ICartItem } from '../../models';

export const addItemToCart = (
	currentCartItems: ICartItem[],
	itemToAdd: ICartItem
) => {
	const existingCartItem = currentCartItems.find(
		cartItem => cartItem.id === itemToAdd.id
	);

	if (existingCartItem) {
		return currentCartItems.map(cartItem =>
			cartItem.id === itemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity! + 1 }
				: cartItem
		);
	}

	return [...currentCartItems, { ...itemToAdd, quantity: 1 }];
};
