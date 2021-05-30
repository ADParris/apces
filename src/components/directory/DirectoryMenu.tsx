import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { DirectoryItem } from '..';
import { selectDirectorySections } from '../../redux/directory';

export const DirectoryMenu: React.FC = () => {
	const sections = useSelector(selectDirectorySections);

	return (
		<Flex justifyContent="space-between" w="full" wrap="wrap">
			{sections.map(({ id, ...otherProps }) => (
				<DirectoryItem key={id} {...otherProps} />
			))}
		</Flex>
	);
};
