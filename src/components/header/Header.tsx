import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { IUser } from '../models';

import { CustomLogo } from '..';
import { NavMenu } from './NavMenu';

interface ComponentProps {
	currentUser: IUser | null;
}

export const Header: React.FC<ComponentProps> = ({ currentUser }) => {
	return (
		<Box className="header">
			<Flex alignItems="center" m="0 1.25rem" justifyContent="space-between">
				<CustomLogo />
				<NavMenu currentUser={currentUser} />
			</Flex>
		</Box>
	);
};
