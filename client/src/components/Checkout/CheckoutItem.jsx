import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addItem, clearItem, removeItem } from '../../redux/cart/cartActions'

const CheckoutItem = ({ addItem, clearItem, item, removeItem }) => {
	const { imageUrl, name, price, quantity } = item

	return (
		<StyledCheckoutItem>
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(item)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(item)}>
					&#10095;
				</div>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={() => clearItem(item)}>
				&#10007;
			</div>
		</StyledCheckoutItem>
	)
}

const StyledCheckoutItem = styled.div`
	border-bottom: 0.1rem solid darkgrey;
	align-items: center;
	min-height: 10rem;
	padding: 1.5rem 0;
	font-size: 2.3rem;
	display: flex;
	width: 100%;

	.image-container {
		padding-right: 1.5rem;
		width: 23%;

		img {
			height: 100%;
			width: 100%;
		}
	}
	.name,
	.quantity,
	.price {
		width: 23%;
	}

	.quantity {
		display: flex;

		.arrow {
			font-size: 2rem;
			cursor: pointer;
		}

		.value {
			margin: 0 1rem;
		}
	}

	.remove-button {
		padding-left: 1.2rem;
		cursor: pointer;
	}
`

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
	clearItem: item => dispatch(clearItem(item)),
	removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
