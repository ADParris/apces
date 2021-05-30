import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface ComponentProps {
	fontSize?: string;
	text?: string;
}

export const PlaceholderText: React.FC<ComponentProps> = ({
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
			<Text fontSize={fontSize} fontWeight="bold">
				{text.toUpperCase()}
			</Text>
		</Flex>
	);
};
