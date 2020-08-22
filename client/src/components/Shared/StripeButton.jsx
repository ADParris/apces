import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ amount }) => {
	const publishableKey = 'pk_test_1IXtYvRgqWEXHqu1nEWS8ofv00dNMVayN2'
	const amountForStripe = amount * 100

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: { amount: amountForStripe, token },
		})
			.then(resp => alert('Payment Successful'))
			.catch(error => {
				console.log(`Payment Error: ${JSON.parse(error)}`)
				alert(
					"There was an issue with your payment. Please make sure you're using the provided credit card."
				)
			})
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
