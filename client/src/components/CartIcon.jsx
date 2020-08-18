import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'

import { toggleCartHidden } from '../redux/cart/cartActions'

const CartIcon = ({ toggleCartHidden }) => (
	<StyledCartIcon onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</StyledCartIcon>
)

const StyledCartIcon = styled.div`
	justify-content: center;
	margin-top: -0.5rem;
	align-items: center;
	position: relative;
	cursor: pointer;
	height: 4.5rem;
	width: 4.5rem;
	display: flex;

	.shopping-icon {
		height: 3rem;
		width: 3rem;
	}

	.item-count {
		position: absolute;
		font-weight: bold;
		font-size: 1.2rem;
		bottom: 1rem;
	}
`

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
