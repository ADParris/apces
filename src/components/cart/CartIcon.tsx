import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItemsCount, toggleCartHidden } from '../../redux/system';

import { ReactComponent as ShoppingBag } from '../../assets/images/shopping-bag.svg';

export const CartIcon: React.FC = () => {
	const dispatch = useDispatch();

	// Redux store...
	const itemCount = useSelector(selectCartItemsCount);

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
				{itemCount}
			</Box>
		</Flex>
	);
};
