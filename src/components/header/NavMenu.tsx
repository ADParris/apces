import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/system';
import { auth } from '../../services';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export const NavMenu: React.FC = () => {
	const colorMode = useColorModeValue('dark', 'light');
	const location = useLocation();

	// Redux store...
	const currentUser = useSelector(selectCurrentUser);

	const createNavLinks = () => {
		const navItems = ['shop', 'contact'];

		currentUser ? navItems.push('signOut') : navItems.push('signIn');

		const thickness = colorMode === 'dark' ? '0.188rem' : '0.125rem';

		const navLinks = navItems.map(navItem => {
			const active = location.pathname === `/${navItem}`;
			const isSignOut = navItem === 'signOut';
			const label =
				navItem === 'signIn'
					? 'sign in'
					: navItem === 'signOut'
					? 'sign out'
					: navItem;

			return (
				<Box key={navItem} mr="0.625rem">
					<Box
						_hover={{ borderBottom: `${thickness} solid` }}
						as={isSignOut ? Box : Link}
						borderBottom={
							active ? `${thickness} solid` : `${thickness} solid transparent`
						}
						cursor="pointer"
						to={`/${navItem}`}
						fontSize="1.438rem"
						m={isSignOut ? '0 0.313rem' : '0.313rem'}
						onClick={() => isSignOut && auth().signOut()}
						p="0.313rem"
					>
						{label.toUpperCase()}
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
