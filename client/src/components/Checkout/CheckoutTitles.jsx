import React from 'react'
import styled from 'styled-components'

const CheckoutTitles = () => {
	const checkoutTitles = [
		'Product',
		'Description',
		'Quantity',
		'Price',
		'Remove',
	]

	const renderCheckoutTitles = () => {
		return checkoutTitles.map((checkoutTitle, index) => (
			<div key={index} className="title-section">
				<span>{checkoutTitle}</span>
			</div>
		))
	}

	return <StyledCheckoutTitles>{renderCheckoutTitles()}</StyledCheckoutTitles>
}

const StyledCheckoutTitles = styled.div`
	border-bottom: 0.1rem solid darkgrey;
	justify-content: space-between;
	display: flex;
	height: 4rem;
	width: 100%;

	.title-section {
		width: 23%;
		&:last-child {
			width: 8%;
		}
	}
`

export default CheckoutTitles
