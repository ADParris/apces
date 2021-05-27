import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

interface ComponentProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	id: string;
	label?: string;
	type: string;
	value: string;
}

export const FormInput: React.FC<ComponentProps> = ({
	handleChange,
	id,
	label,
	type,
	value,
}) => {
	return (
		<FormControl id={id} position="relative" m="2.813rem 0">
			<Input
				backgroundColor="white"
				borderBottom="0.063rem solid"
				borderRadius={0}
				fontSize="1.125rem"
				onChange={handleChange}
				p="0.625rem 0.625rem 0.625rem 0.313rem"
				type={type}
				value={value}
				variant="unstyled"
			/>
			{label && (
				<FormLabel
					_focus={{ color: 'gray.600', fontSize: '0.75rem', top: '-0.875rem' }}
					color="gray.400"
					fontSize="1rem"
					fontWeight="normal"
					left="0.313rem"
					pointerEvents="none"
					position="absolute"
					top="0.625rem"
					transition="all 300ms ease"
				>
					{label}
				</FormLabel>
			)}
		</FormControl>
	);
};
