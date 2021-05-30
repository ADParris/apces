import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartHidden } from '../../redux/cart';

import { CartDropdown } from '../cart/CartDropdown';
import { CustomLogo } from '..';
import { NavMenu } from './NavMenu';

export const Header: React.FC = () => {
	const cartHidden = useSelector(selectCartHidden);

	return (
		<Box className="header">
			<Flex alignItems="center" m="0 1.25rem" justifyContent="space-between">
				<CustomLogo />
				<NavMenu />
				{!cartHidden && <CartDropdown />}
			</Flex>
		</Box>
	);
};
