import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

import { ICartItem } from '../../redux/cart/types';

interface ComponentProps {
	item: ICartItem;
}

export const CartItem: React.FC<ComponentProps> = ({ item }) => {
	const { imageUrl, name, price, quantity } = item;

	return (
		<Flex h="4.5rem" mb="0.625rem" w="full">
			<Image alt={name} src={imageUrl} w="30%" />
			<Flex
				alignItems="flex-start"
				flexDirection="column"
				justifyContent="center"
				p="0.625rem 1.25rem"
				w="70%"
			>
				<Box as="span" fontSize="1rem">
					{name}
				</Box>
				<Box as="span">
					{quantity} x ${price}
				</Box>
			</Flex>
		</Flex>
	);
};
