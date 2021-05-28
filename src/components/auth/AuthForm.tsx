import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { signInWithGoogle } from '../../services';

import { CustomButton, CustomInput } from '..';

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
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
					<CustomInput
						handleChange={handleChange}
						id="email"
						label="Email Address"
						name="email"
						type="email"
						value={email}
					/>

					<CustomInput
						handleChange={handleChange}
						id="password"
						label="Password"
						name="password"
						type="password"
						value={password}
					/>

					{!isSignin && (
						<CustomInput
							handleChange={handleChange}
							id="comfirmPassword"
							label="Comfirm Password"
							name="confirmPassword"
							type="password"
							value={confirmPassword}
						/>
					)}

					<Flex justifyContent="space-between" mt="1rem" w="full">
						<CustomButton type="submit">
							Sign {isSignin ? 'In' : 'Up'}
						</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							SIGNIN WITH GOOGLE
						</CustomButton>
					</Flex>
				</form>
			</Box>

			<Text fontSize="1.125rem" mt="1rem">
				{isSignin ? `Don't` : `Already`} have an account?&nbsp;
				<Text
					_hover={{
						borderBottom: '0.063rem solid',
						color: 'gray',
						cursor: 'pointer',
					}}
					as="span"
					color="gray.400"
					onClick={toggleForm}
				>
					Sign {isSignin ? 'Up' : 'In'}
				</Text>
				&nbsp;instead!
			</Text>
		</Flex>
	);
};
