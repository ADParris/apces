import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { Colors } from '../../constants';
import { selectCartItems } from '../../redux/system';

import { CustomButton } from '../CustomButton';
import { CartItem } from './CartItem';

export const CartDropdown: React.FC = () => {
	const isDarkMode = useColorModeValue('dark', 'light') === 'dark';

	const cartItems = useSelector(selectCartItems);

	return (
		<Flex
			backgroundColor={isDarkMode ? 'white' : Colors.black}
			border="0.063rem solid"
			flexDirection="column"
			h="21.25rem"
			p="1.25rem"
			position="absolute"
			right="3.75rem"
			top="4.25rem"
			w="15rem"
			zIndex="5"
		>
			<Flex flexDirection="column" h="15rem" overflowY="scroll">
				{cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</Flex>
			<Box mt="auto">
				<CustomButton width="full" isInverse>
					GO TO CHECKOUT
				</CustomButton>
			</Box>
		</Flex>
	);
};
