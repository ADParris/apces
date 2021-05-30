import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../../models';
import { addCartItem } from '../../redux/cart';

import { CustomButton } from '../CustomButton';

interface ComponentProps {
	item: IProduct;
}

export const CollectionItem: React.FC<ComponentProps> = ({ item }) => {
	const { imageUrl, name, price } = item;
	const dispatch = useDispatch();

	const handleClick = () => dispatch(addCartItem(item));

	return (
		<Flex
			_hover={{ cursor: 'pointer' }}
			alignItems="center"
			flexDirection="column"
			h="21.875rem"
			justifyContent="center"
			position="relative"
			role="group"
			w="22vw"
		>
			<Box
				_groupHover={{ opacity: 0.8 }}
				backgroundImage={imageUrl}
				backgroundPosition="center"
				backgroundSize="cover"
				h="95%"
				mb="0.313rem"
				w="full"
			/>
			<Flex fontSize="lg" justifyContent="space-between" h="5%" mb="4" w="full">
				<Box as="span">{name}</Box>
				<Box as="span">{`$${price}`}</Box>
			</Flex>
			<Box
				_groupHover={{ opacity: 0.85, display: 'block' }}
				bottom="3.538rem"
				display="none"
				opacity={0}
				position="absolute"
				width="80%"
			>
				<CustomButton bottom="0" onClick={handleClick} width="full" isInverse>
					ADD TO CART
				</CustomButton>
			</Box>
		</Flex>
	);
};
