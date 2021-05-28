import {
	FormControl,
	FormLabel,
	Input,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

interface ComponentProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	id: string;
	label?: string;
	name: string;
	type: string;
	value: string;
}

export const CustomInput: React.FC<ComponentProps> = ({
	handleChange,
	id,
	label,
	name,
	type,
	value,
}) => {
	const isDarkMode = useColorModeValue('dark', 'light') === 'dark';

	return (
		<FormControl id={id} position="relative" m="2.813rem 0">
			<Input
				backgroundColor={isDarkMode ? 'white' : '#1A202C'}
				borderBottom={`0.063rem solid ${isDarkMode ? '#1A202C' : 'white'}`}
				borderRadius={0}
				color={isDarkMode ? '#1A202C' : 'white'}
				fontSize="1.125rem"
				name={name}
				onChange={handleChange}
				p="0.625rem 0.625rem 0.625rem 0.313rem"
				type={type}
				value={value}
				variant="unstyled"
			/>
			{label && (
				<FormLabel
					_focus={{
						color: isDarkMode ? 'gray.600' : 'whiteAlpha.600',
						fontSize: '0.75rem',
						top: '-1.125rem',
					}}
					color={isDarkMode ? 'gray.400' : 'whiteAlpha.400'}
					fontSize={value ? '0.75rem' : '1rem'}
					fontWeight="normal"
					left="0.313rem"
					pointerEvents="none"
					position="absolute"
					top={value ? '-1.125rem' : '0.625rem'}
					transition="all 300ms ease"
				>
					{label}
				</FormLabel>
			)}
		</FormControl>
	);
};
