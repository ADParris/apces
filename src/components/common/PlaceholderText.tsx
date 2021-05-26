import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface ComponentProps {
	color?: string;
	fontSize?: string;
	text?: string;
}

export const PlaceholderText: React.FC<ComponentProps> = ({
	color = 'blackAlpha.500',
	fontSize = '2xl',
	text = 'Hello World!',
}) => {
	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			h="full"
			justifyContent="center"
		>
			<Text color={color} fontSize={fontSize} fontWeight="bold">
				{text}
			</Text>
		</Flex>
	);
};
