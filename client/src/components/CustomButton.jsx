import React from 'react'
import styled from 'styled-components'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<StyledCustomButton googleButton={isGoogleSignIn} {...otherProps}>
		{children}
	</StyledCustomButton>
)

const StyledCustomButton = styled.button`
	background-color: ${props => (props.googleButton ? `#4285f4` : `black`)};
	font-family: 'Open Sans Condensed';
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	font-weight: bolder;
	min-width: 16.5rem;
	line-height: 5rem;
	padding: 0 3.5rem;
	font-size: 1.5rem;
	cursor: pointer;
	height: 5rem;
	color: white;
	border: none;
	width: auto;

	&:hover {
		border: ${props => (props.googleButton ? `none` : `0.1rem solid black`)};
		background-color: ${props => (props.googleButton ? `#357ae8` : `white`)};
		color: ${props => (props.googleButton ? `white` : `black`)};
	}
`

export default CustomButton
