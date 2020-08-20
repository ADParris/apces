import React from 'react'
import styled from 'styled-components'

import Layout from '../layout/Layout'

import SignIn from '../components/Auth/SignIn'
import SignUp from '../components/Auth/SignUp'

const AuthPage = () => (
	<Layout>
		<StyledAuthPage>
			<SignIn />
			<SignUp />
		</StyledAuthPage>
	</Layout>
)

const StyledAuthPage = styled.div`
	justify-content: space-between;
	display: flex;
	width: 85rem;
`

export default AuthPage
