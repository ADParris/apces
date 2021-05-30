import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';

import { addCartItem, clearCartItem, removeCartItem } from '../../redux/system';
import { ICartItem } from '../../models';

interface ComponentProps {
	item: ICartItem;
}

export const CheckoutItem: React.FC<ComponentProps> = ({ item }) => {
	const { imageUrl, name, price, quantity } = item;
	const dispatch = useDispatch();

	const handleAddItem = () => dispatch(addCartItem(item));
	const handleClearItem = () => dispatch(clearCartItem(item));
	const handleRemoveItem = () => dispatch(removeCartItem(item));

	return (
		<Flex
			alignItems="center"
			borderBottom="0.063rem solid"
			fontSize="1.25rem"
			minH="6.25rem"
			p="1rem 0"
			w="full"
		>
			<Box pr="0.938rem" w="23%">
				<Image alt={name} h="full" src={imageUrl} w="full" />
			</Box>
			<Box as="span" w="23%">
				<Text>{name}</Text>
			</Box>
			<Flex as="span" w="23%">
				<Box cursor="pointer" onClick={handleRemoveItem}>
					<Text>&#10094;</Text>
				</Box>
				<Text mx="0.625rem">{quantity}</Text>
				<Box cursor="pointer" onClick={handleAddItem}>
					<Text>&#10095;</Text>
				</Box>
			</Flex>
			<Box as="span" w="23%">
				<Text>${price}</Text>
			</Box>
			<Box cursor="pointer" onClick={handleClearItem} pl="0.75rem">
				<Text>&#10005;</Text>
			</Box>
		</Flex>
	);
};
