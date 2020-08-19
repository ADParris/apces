import React from 'react'
import styled from 'styled-components'

import CheckoutItem from './CheckoutItem'

const CheckoutItemsList = ({ items }) => {
	const renderCartItems = () =>
		items.map(item => <CheckoutItem key={item.id} item={item} />)

	return <StyledCheckoutItemsList>{renderCartItems()}</StyledCheckoutItemsList>
}

const StyledCheckoutItemsList = styled.div`
	width: 100%;
`

export default CheckoutItemsList
