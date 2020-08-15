import React from 'react'
import styled from 'styled-components'

import Directory from '../components/Directory'

const HomePage = () => (
	<StyledHomePage>
		<Directory />
	</StyledHomePage>
)

const StyledHomePage = styled.div`
	flex-direction: column;
	align-items: center;
	padding: 2rem 8rem;
	display: flex;
`

export default HomePage
