import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CollectionItem } from './CollectionItem';

interface ComponentProps {
	items: {
		id: number;
		imageUrl: string;
		name: string;
		price: number;
	}[];
	title: string;
}

export const CollectionPreview: React.FC<ComponentProps> = ({
	items,
	title,
}) => {
	return (
		<Flex flexDirection="column" mb="7">
			<Text as="h2" fontSize="3xl" mb="6">
				{title.toUpperCase()}
			</Text>
			<Flex justifyContent="space-between">
				{items
					.filter((_, index) => index < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</Flex>
		</Flex>
	);
};
