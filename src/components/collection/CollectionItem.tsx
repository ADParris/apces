import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface ComponentProps {
	imageUrl: string;
	name: string;
	price: number;
}

export const CollectionItem: React.FC<ComponentProps> = ({
	imageUrl,
	name,
	price,
}) => {
	return (
		<Flex alignItems="center" flexDirection="column" h="21.875rem" w="22%">
			<Box
				backgroundImage={imageUrl}
				backgroundPosition="center"
				backgroundSize="cover"
				h="95%"
				mb="0.313rem"
				w="full"
			/>
			<Flex fontSize="lg" justifyContent="space-between" h="5%" mb="4" w="full">
				<Box as="span">{name}</Box>
				<Box as="span">{`$${price}`}</Box>
			</Flex>
		</Flex>
	);
};
