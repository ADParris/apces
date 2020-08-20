import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors'

import Layout from '../layout/Layout'

import CheckoutItemsList from '../components/Checkout/CheckoutItemsList'
import CheckoutTitles from '../components/Checkout/CheckoutTitles'
import StripeButton from '../components/Shared/StripeButton'

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<Layout>
			<StyledCheckoutPage>
				<CheckoutTitles />
				<CheckoutItemsList items={cartItems} />
				<div className="cart-total">
					<span>TOTAL: ${total}</span>
				</div>
				<div className="test-warning">
					• Please use the following test credit card for payments •
					<br />
					4242 4242 4242 4242 • Exp: 01/24 • CVV: 123
				</div>
				<StripeButton amount={total} />
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
	.test-warning {
		text-align: center;
		font-size: 2.4rem;
		margin: 4rem 0;
		color: red;
	}
`

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
