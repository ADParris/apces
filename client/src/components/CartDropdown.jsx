import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import CartItem from './CartItem'
import CustomButton from './CustomButton'

import { selectCartItems } from '../redux/cart/cartSelectors'

const CartDropdown = ({ cartItems }) => (
	<StyledCartDropdown>
		<div className="cart-items">
			{cartItems.map(cartItem => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
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

const mapStateToProps = state => ({ cartItems: selectCartItems(state) })

export default connect(mapStateToProps)(CartDropdown)
