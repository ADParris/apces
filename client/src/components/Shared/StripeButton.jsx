import React from 'react'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ amount }) => {
	const publishableKey = 'pk_test_1IXtYvRgqWEXHqu1nEWS8ofv00dNMVayN2'
	const amountForStripe = amount * 100

	const onToken = token => {
		console.log(token)
		alert('Payment Successful')
	}

	return (
		<StyledStripeButton>
			<StripeCheckout
				description={`Your total is $${amount}`}
				image="https://svgshare.com/i/Ntv.svg"
				stripeKey={publishableKey}
				amount={amountForStripe}
				panelLabel="Pay Now"
				name="AP Clothing Ltd."
				label="Pay Now"
				shippingAddress
				token={onToken}
				billingAddress
			/>
		</StyledStripeButton>
	)
}

const StyledStripeButton = styled.div`
	justify-content: flex-end;
	display: flex;
	width: 100%;
`

export default StripeButton
