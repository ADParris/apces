import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors'

import Layout from '../layout/Layout'

import CheckoutItemsList from '../components/Checkout/CheckoutItemsList'
import CheckoutTitles from '../components/Checkout/CheckoutTitles'

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<Layout>
			<StyledCheckoutPage>
				<CheckoutTitles />
				<CheckoutItemsList items={cartItems} />
				<div className="cart-total">
					<span>TOTAL: ${total}</span>
				</div>
			</StyledCheckoutPage>
		</Layout>
	)
}

const StyledCheckoutPage = styled.div`
	flex-direction: column;
	align-items: center;
	margin: 5rem auto 0;
	min-height: 90vh;
	display: flex;
	width: 55%;

	.cart-total {
		text-align: right;
		margin-right: 8%;
		font-size: 200%;
		width: 100%;
	}
`

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
