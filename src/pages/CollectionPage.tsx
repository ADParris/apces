import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectShopCollection } from '../redux/shop';

import { CollectionItem } from '../components';

interface ComponentProps {
	match: {
		params: {
			collectionId: string;
		};
	};
}

export const CollectionPage: React.FC<ComponentProps> = ({
	match: {
		params: { collectionId },
	},
}) => {
	const collection = useSelector(selectShopCollection(collectionId));

	return (
		<Flex flexDirection="column">
			<Text as="h2" fontSize="2.375rem" m="0 auto 1.875rem">
				{collection?.title}
			</Text>
			<Grid gap="0.75rem" templateColumns="1fr 1fr 1fr 1fr">
				{collection?.items.map(item => (
					<Box key={item.id} mb="0.75rem">
						<CollectionItem item={item} />
					</Box>
				))}
			</Grid>
		</Flex>
	);
};
