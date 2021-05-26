import { Flex } from '@chakra-ui/layout';
import React from 'react';

import { DirectoryMenu } from '../components';

export const HomePage: React.FC = () => {
	return (
		<Flex
			className="homepage"
			alignItems="center"
			flexDirection="column"
			p="1.25rem 5rem"
		>
			<DirectoryMenu />
		</Flex>
	);
};
