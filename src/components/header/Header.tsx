import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { CustomLogo } from '..';
import { NavMenu } from './NavMenu';

export const Header: React.FC = () => {
	return (
		<Box className="header">
			<Flex alignItems="center" m="0 1.25rem" justifyContent="space-between">
				<CustomLogo />
				<NavMenu />
			</Flex>
		</Box>
	);
};
