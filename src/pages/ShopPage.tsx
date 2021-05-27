import { Box } from '@chakra-ui/react';
import React from 'react';

import { CollectionPreview } from '../components';

import { SHOP_DATA } from '../constants/shop.data';

export const ShopPage: React.FC = () => {
	const collections = SHOP_DATA;

	return (
		<Box className="shop-page">
			{collections.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))}
		</Box>
	);
};
