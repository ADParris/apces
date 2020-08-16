import React from 'react'
import styled from 'styled-components'

import CustomButton from './CustomButton'
import FormInput from './FormInput'

import { signInWithGoogle } from '../api/firebase.utils'

const INITIAL_STATE = { email: '', password: '' }

const SignIn = () => {
	const [credentials, setCredentials] = React.useState(INITIAL_STATE)
	const { email, password } = credentials

	const handleChange = ({ target: { name, value } }) =>
		setCredentials({ ...credentials, [name]: value })

	const handleSubmit = e => {
		e.preventDefault()
		console.log(`Email: ${email}`)
		console.log(`Password: ${password}`)
		setCredentials(INITIAL_STATE)
	}

	return (
		<StyledSignIn>
			<h2 className="title">I already have an account...</h2>
			<span>Sign in with your email and password.</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="email"
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					label="password"
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					required
				/>
				<div className="login-buttons">
					<CustomButton type="submit">SIGNIN</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						SIGNIN WITH GOOGLE
					</CustomButton>
				</div>
			</form>
		</StyledSignIn>
	)
}

const StyledSignIn = styled.div`
	flex-direction: column;
	display: flex;
	width: 38rem;

	.title {
		margin: 1rem 0;
	}

	.login-buttons {
		justify-content: space-between;
		display: flex;
	}
`

export default SignIn
