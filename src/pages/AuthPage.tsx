import { Box } from '@chakra-ui/react';
import React from 'react';

import { AuthForm } from '../components';

export const AuthPage: React.FC = () => {
	return (
		<Box mx="auto" maxW="23.75rem">
			<AuthForm />
		</Box>
	);
};
