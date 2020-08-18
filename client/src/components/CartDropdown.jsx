import React from 'react'
import styled from 'styled-components'

import CustomButton from './CustomButton'

const CartDropdown = () => (
	<StyledCartDropdown>
		<div className="cart-items"></div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</StyledCartDropdown>
)

const StyledCartDropdown = styled.div`
	border: 0.1rem solid black;
	background-color: white;
	flex-direction: column;
	position: absolute;
	padding: 2rem;
	display: flex;
	height: 34rem;
	width: 24rem;
	top: 6.5rem;
	right: 2rem;
	z-index: 1;

	.cart-items {
		flex-direction: column;
		overflow: scroll;
		height: 24rem;
		display: flex;
	}

	button {
		margin-top: auto;
	}
`

export default CartDropdown
