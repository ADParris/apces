import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export const NavMenu: React.FC = () => {
	const colorMode = useColorModeValue('dark', 'light');
	const location = useLocation();

	// Temporary...
	const isAuthed = false;

	const createNavLinks = () => {
		const navItems = ['shop', 'contact'];

		isAuthed ? navItems.push('signout') : navItems.push('signin');

		const thickness = colorMode === 'dark' ? '0.188rem' : '0.125rem';

		const navLinks = navItems.map(navItem => {
			const active = location.pathname === `/${navItem}`;

			return (
				<Box key={navItem} mr="0.625rem">
					<Box
						_hover={{ borderBottom: `${thickness} solid` }}
						as={Link}
						borderBottom={active ? `${thickness} solid` : 'none'}
						to={`/${navItem}`}
						fontSize="1.438rem"
						p="0.313rem"
						m="0.313rem"
					>
						{navItem.toUpperCase()}
					</Box>
				</Box>
			);
		});
		return navLinks;
	};

	return (
		<Flex>
			<Flex alignItems="center">{createNavLinks()}</Flex>
			{/* Shopping cart goes in the box below! */}
			<Box></Box>
			<ColorModeSwitcher />
		</Flex>
	);
};
