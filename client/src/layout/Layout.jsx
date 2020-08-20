import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../constants/globalStyle'

import Header from '../components/Shared/Header'

const Layout = ({ children }) => (
	<>
		<GlobalStyle />
		<Header />
		<StyledLayout>{children}</StyledLayout>
	</>
)

const StyledLayout = styled.div`
	flex-direction: column;
	align-items: center;
	padding: 2rem 6rem;
	display: flex;
`

export default Layout
