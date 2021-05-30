import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../redux/system';

import { PlaceholderText } from '../components/common';
import { CheckoutItem } from '../components';

export const CheckoutPage: React.FC = () => {
	const columnHeaders = [
		'product',
		'description',
		'quantity',
		'price',
		'remove',
	];

	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	const capitalizeWord = (word: string) =>
		word[0].toUpperCase() + word.substring(1);

	return (
		<Flex alignItems="center" flexDirection="column" m="auto" w="55%">
			<PlaceholderText text="checkout" fontSize="2.25rem" />
			<Flex
				borderBottom="0.063rem solid"
				justifyContent="space-between"
				mt="1rem"
				w="full"
			>
				{columnHeaders.map(columnHeader => (
					<Box _last={{ w: '8%' }} as="span" key={columnHeader} w="23%">
						<Text>{capitalizeWord(columnHeader)}</Text>
					</Box>
				))}
			</Flex>
			{cartItems.map(cartItem => (
				<CheckoutItem item={cartItem} key={cartItem.id} />
			))}
			<Flex justifyContent="flex-end" w="full">
				<Text fontSize="2.25rem">TOTAL: ${cartTotal}</Text>
			</Flex>
		</Flex>
	);
};
