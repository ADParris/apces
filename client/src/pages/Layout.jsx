import React from 'react'
import styled from 'styled-components'

const Layout = ({ children }) => <StyledLayout>{children}</StyledLayout>

const StyledLayout = styled.div`
	flex-direction: column;
	align-items: center;
	padding: 2rem 8rem;
	display: flex;
`

export default Layout
