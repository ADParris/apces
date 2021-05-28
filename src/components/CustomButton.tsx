import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { Colors } from '../constants';

interface ComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isInverse?: boolean;
	isGoogleSignIn?: boolean;
}

export const CustomButton: React.FC<ComponentProps> = ({
	children,
	isInverse,
	isGoogleSignIn,
	...otherProps
}) => {
	const isDarkMode = useColorModeValue('dark', 'light') === 'dark';

	const inverseButtonColor = isDarkMode ? 'white' : Colors.black;
	const inverseTextColor = isDarkMode ? Colors.black : 'white';
	const inverseHoverBorderColor = isDarkMode ? Colors.black : 'white';

	const normalButtonColor = isDarkMode ? Colors.black : 'white';
	const normalTextColor = isDarkMode ? 'white' : Colors.black;
	const normalHoverBorderColor = isDarkMode ? Colors.black : 'white';

	return (
		<Button
			_hover={{
				backgroundColor: isGoogleSignIn
					? Colors.googleHighlight
					: isInverse
					? normalButtonColor
					: inverseButtonColor,
				border: `0.063rem solid ${
					isGoogleSignIn
						? 'transparent'
						: isInverse
						? normalHoverBorderColor
						: inverseHoverBorderColor
				}`,
				color: isGoogleSignIn
					? 'white'
					: isInverse
					? normalTextColor
					: inverseTextColor,
			}}
			backgroundColor={
				isGoogleSignIn
					? Colors.googleBase
					: isInverse
					? inverseButtonColor
					: normalButtonColor
			}
			border={`0.063rem solid ${isInverse ? Colors.black : 'transparent'}`}
			borderRadius="0"
			color={
				isGoogleSignIn
					? 'white'
					: isInverse
					? inverseTextColor
					: normalTextColor
			}
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
