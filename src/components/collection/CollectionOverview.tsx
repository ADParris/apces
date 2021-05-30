import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectShopCollectionsForPreview } from '../../redux/shop';

import { CollectionPreview } from './CollectionPreview';

export const CollectionOverview: React.FC = () => {
	const collections = useSelector(selectShopCollectionsForPreview);

	return (
		<Box>
			{collections.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))}
		</Box>
	);
};
