import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/ap-logo.svg';
import { NavMenu } from './NavMenu';

export const Header: React.FC = () => {
	return (
		<Box className="header">
			<Flex alignItems="center" m="0 1.25rem" justifyContent="space-between">
				<Flex as={Link} h="3.888rem" p="0.313rem" to="/">
					<Icon as={Logo} color="current" h="2.813rem" w="2.813rem" />
					<Text
						alignSelf="flex-end"
						fontSize="1.5rem"
						fontWeight="bold"
						lineHeight="1.35"
					>
						Clothing
					</Text>
				</Flex>
				<NavMenu />
			</Flex>
		</Box>
	);
};
