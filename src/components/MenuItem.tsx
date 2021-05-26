import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';

interface ComponentProps {
	imageUrl: string;
	linkUrl: string;
	size?: string;
	title: string;
}

export const MenuItem: React.FC<ComponentProps> = ({
	imageUrl,
	linkUrl,
	size,
	title,
}) => {
	const history = useHistory();
	const match = useRouteMatch();

	return (
		<Flex
			_first={{ mr: '0.46875rem' }}
			_hover={{
				cursor: 'pointer',
			}}
			_last={{ ml: '0.46875rem' }}
			alignItems="center"
			border="0.0625rem solid black"
			flex="1 1 auto"
			h={size ? '23.75rem' : '15rem'}
			justifyContent="center"
			m="0 0.46875rem 0.9375rem"
			minW="30%"
			onClick={() => history.push(`${match.url}${linkUrl}`)}
			overflow="hidden"
			role="group"
		>
			<Box
				_groupHover={{
					transform: 'scale(1.1)',
					transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
				}}
				backgroundImage={imageUrl}
				backgroundPosition="center"
				backgroundSize="cover"
				h="full"
				w="full"
			/>
			<Flex
				_groupHover={{ opacity: 0.9 }}
				alignItems="center"
				backgroundColor="white"
				border="0.0625rem solid black"
				flexDirection="column"
				h="5.625rem"
				justifyContent="center"
				p="1.563rem"
				position="absolute"
				opacity="0.7"
			>
				<Text as="h1" color="gray.600" fontSize="2xl" fontWeight="bold" mb="xs">
					{title.toUpperCase()}
				</Text>
				<Text as="span" fontSize="md" fontWeight="light">
					SHOP NOW
				</Text>
			</Flex>
		</Flex>
	);
};
