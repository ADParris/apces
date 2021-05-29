import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/system';

import { ReactComponent as ShoppingBag } from '../../assets/images/shopping-bag.svg';

export const CartIcon: React.FC = () => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch(toggleCartHidden());

	return (
		<Flex
			alignItems="center"
			cursor="pointer"
			h="2.813rem"
			justifyContent="center"
			onClick={handleClick}
			position="relative"
			w="2.813rem"
		>
			<Box as={ShoppingBag} h="1.5rem" w="1.5rem" />
			<Box
				as="span"
				bottom="0.75rem"
				fontSize="0.625rem"
				fontWeight="bold"
				position="absolute"
			>
				0
			</Box>
		</Flex>
	);
};
