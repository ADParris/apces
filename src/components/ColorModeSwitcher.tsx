import React from 'react';
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
	MenuItem,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

interface ComponentProps {
	menuItem?: boolean;
	otherProps?: ColorModeSwitcherProps;
}

export const ColorModeSwitcher: React.FC<ComponentProps> = ({
	menuItem = false,
	...otherProps
}) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return menuItem ? (
		<MenuItem icon={<SwitchIcon />} onClick={toggleColorMode}>
			Dark Mode
		</MenuItem>
	) : (
		<IconButton
			_hover={{ background: 'whiteAlpha.200' }}
			aria-label={`Switch to ${text} mode`}
			color="white"
			fontSize="lg"
			icon={<SwitchIcon />}
			onClick={toggleColorMode}
			size="md"
			variant="ghost"
			{...otherProps}
		/>
	);
};
