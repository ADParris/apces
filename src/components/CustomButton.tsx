import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface ComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isInverse?: boolean;
}

export const CustomButton: React.FC<ComponentProps> = ({
	children,
	isInverse,
	...otherProps
}) => {
	const isDarkMode = useColorModeValue('dark', 'light') === 'dark';

	const inverseButtonColor = isDarkMode ? 'white' : 'black';
	const inverseTextColor = isDarkMode ? 'black' : 'white';
	const inverseHoverBorderColor = isDarkMode ? 'black' : 'white';

	const normalButtonColor = isDarkMode ? 'black' : 'white';
	const normalTextColor = isDarkMode ? 'white' : 'black';
	const normalHoverBorderColor = isDarkMode ? 'black' : 'white';

	return (
		<Button
			_hover={{
				backgroundColor: isInverse ? normalButtonColor : inverseButtonColor,
				border: `0.063rem solid ${
					isInverse ? normalHoverBorderColor : inverseHoverBorderColor
				}`,
				color: isInverse ? normalTextColor : inverseTextColor,
			}}
			backgroundColor={isInverse ? inverseButtonColor : normalButtonColor}
			border={`0.063rem solid ${isInverse ? 'black' : 'transparent'}`}
			borderRadius="0"
			color={isInverse ? inverseTextColor : normalTextColor}
			cursor="pointer"
			fontFamily="Open Sans Condensed"
			fontSize="0.938rem"
			fontWeight="extrabold"
			h="3.125rem"
			letterSpacing="0.031rem"
			lineHeight="3.125rem"
			minW="10.313rem"
			textTransform="uppercase"
			variant="solid"
			w="auto"
			{...otherProps}
		>
			{children}
		</Button>
	);
};
