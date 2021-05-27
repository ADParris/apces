import React from 'react';
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
	const { toggleColorMode } = useColorMode();
	const color = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			_hover={{ background: 'whiteAlpha.200' }}
			alignSelf="center"
			aria-label={`Switch to ${color} mode`}
			color={color}
			fontSize="lg"
			icon={<SwitchIcon />}
			onClick={toggleColorMode}
			size="md"
			variant="ghost"
			{...props}
		/>
	);
};
