import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import Item from './Item'
import CustomButton from '../Shared/CustomButton'

import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItems } from '../../redux/cart/cartSelectors'

const Dropdown = ({ cartItems, dispatch, history }) => {
	const handleClick = () => {
		history.push('/checkout')
		dispatch(toggleCartHidden())
	}

	return (
		<StyledDropdown>
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map(cartItem => <Item key={cartItem.id} item={cartItem} />)
				) : (
					<span className="empty-message">CART IS EMPTY</span>
				)}
			</div>
			<CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
		</StyledDropdown>
	)
}

const StyledDropdown = styled.div`
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

		.empty-message {
			justify-content: center;
			align-items: center;
			font-size: 2.4rem;
			display: flex;
			height: 100%;
		}
	}

	button {
		margin-top: auto;
	}
`

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default withRouter(connect(mapStateToProps)(Dropdown))
