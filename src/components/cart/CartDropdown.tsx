import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Colors } from '../../constants';
import { selectCartItems, toggleCartHidden } from '../../redux/system';

import { CustomButton } from '../CustomButton';
import { CartItem } from './CartItem';

export const CartDropdown: React.FC = () => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const history = useHistory();
	const isDarkMode = useColorModeValue('dark', 'light') === 'dark';

	const handleClick = () => {
		history.push('/checkout');
		dispatch(toggleCartHidden());
	};

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
			<Flex
				css={{
					'&::-webkit-scrollbar': {
						width: '0.313rem',
					},
					'&::-webkit-scrollbar-track': {
						width: '0.313rem',
					},
					'&::-webkit-scrollbar-thumb': {
						background: isDarkMode ? Colors.black : 'white',
						borderRadius: '0.313rem',
					},
				}}
				flexDirection="column"
				h="15rem"
				overflowY={'scroll'}
			>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<Flex
						alignItems="center"
						fontSize="1.125rem"
						h="full"
						justifyContent="center"
					>
						Your cart is empty.
					</Flex>
				)}
			</Flex>
			<Box mt="auto">
				<CustomButton onClick={handleClick} width="full" isInverse>
					GO TO CHECKOUT
				</CustomButton>
			</Box>
		</Flex>
	);
};
