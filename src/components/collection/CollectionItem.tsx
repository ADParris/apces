import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface ComponentProps {
	imageUrl: string;
	name: string;
	price: number;
}

export const CollectionItem: React.FC<ComponentProps> = ({
	imageUrl,
	name,
	price,
}) => {
	return (
		<Flex
			className="collection-item"
			alignItems="center"
			flexDirection="column"
			h="21.875rem"
			w="22%"
		>
			<Box
				className="image"
				backgroundImage={imageUrl}
				backgroundPosition="center"
				backgroundSize="cover"
				h="95%"
				mb="0.313rem"
				w="full"
			/>
			<Flex
				className="collection-footer"
				fontSize="lg"
				justifyContent="space-between"
				h="5%"
				mb="4"
				w="full"
			>
				<Box className="name" as="span">
					{name}
				</Box>
				<Box className="price" as="span">
					{`$${price}`}
				</Box>
			</Flex>
		</Flex>
	);
};
