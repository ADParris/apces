import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CustomButton } from '../CustomButton';

import { FormInput } from './FormInput';

interface Credentials {
	[x: string]: string;
}

const INITIAL_CREDENTIALS = {
	confirmPassword: '',
	email: '',
	password: '',
};

export const AuthForm: React.FC = () => {
	const [credentials, setCredentials] =
		React.useState<Credentials>(INITIAL_CREDENTIALS);
	const [isSignin, setIsSignin] = React.useState(true);

	const { confirmPassword, email, password } = credentials;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({ ...credentials, [e.target.type]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(credentials);

		setCredentials(INITIAL_CREDENTIALS);
	};

	const toggleForm = () => setIsSignin(!isSignin);

	return (
		<Flex alignItems="center" flexDirection="column" w="full">
			<Text as="h1" fontSize="3rem">
				Sign {isSignin ? 'In' : 'Up'}
			</Text>

			<Box w="full">
				<form onSubmit={handleSubmit}>
					<FormInput
						handleChange={handleChange}
						id="email"
						label="Email Address"
						type="email"
						value={email}
					/>

					<FormInput
						handleChange={handleChange}
						id="password"
						label="Password"
						type="password"
						value={password}
					/>

					{!isSignin && (
						<FormInput
							handleChange={handleChange}
							id="comfirm-password"
							label="Comfirm Password"
							type="password"
							value={confirmPassword}
						/>
					)}

					<Flex justifyContent="space-between" mt="1rem" w="full">
						<CustomButton type="submit">SUBMIT</CustomButton>
						<Button
							_hover={{ backgroundColor: 'blue' }}
							backgroundColor="blue.400"
							color="white"
							fontSize="1.125rem"
						>
							{`Sign ${isSignin ? 'In' : 'Up'} with Google`}
						</Button>
					</Flex>
				</form>
			</Box>

			<Text fontSize="1.125rem" mt="1rem">
				{isSignin ? `Don't` : `Already`} have an account?&nbsp;
				<Text
					_hover={{
						borderBottom: '0.063rem solid',
						color: 'blue',
						cursor: 'pointer',
					}}
					as="span"
					fontStyle="italic"
					onClick={toggleForm}
				>
					Sign {isSignin ? 'Up' : 'In'}
				</Text>
				&nbsp;instead!
			</Text>
		</Flex>
	);
};
