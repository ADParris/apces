import React from 'react'
import styled from 'styled-components'

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
	<StyledCartItem>
		<img src={imageUrl} alt={`item: ${name}`} />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x ${price}
			</span>
		</div>
	</StyledCartItem>
)

const StyledCartItem = styled.div`
	margin-bottom: 1.5rem;
	display: flex;
	height: 8rem;
	width: 100%;

	img {
		width: 30%;
	}

	.item-details {
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		padding: 1rem 2rem;
		display: flex;
		width: 70%;
	}
`

export default CartItem
