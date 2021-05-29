import { IProduct } from '.';

export interface ICartItem extends IProduct {
	quantity?: number;
}

export interface ICart {
	hidden: boolean;
	items: ICartItem[];
}
