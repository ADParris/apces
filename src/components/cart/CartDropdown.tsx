import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { Colors } from '../../constants';

import { CustomButton } from '../CustomButton';

export const CartDropdown: React.FC = () => {
	const isDarkMode = useColorModeValue('dark', 'light') === 'dark';

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
			<Flex flexDirection="column" h="15rem" overflowY="scroll"></Flex>
			<Box mt="auto">
				<CustomButton isInverse w="full">
					CHECKOUT
				</CustomButton>
			</Box>
		</Flex>
	);
};
