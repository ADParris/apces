import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface ComponentProps {
	price: number;
}

export const StripeCheckoutButton: React.FC<ComponentProps> = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_1IXtYvRgqWEXHqu1nEWS8ofv00dNMVayN2';

	const onToken = (token: Token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			amount={priceForStripe}
			billingAddress
			description={`Your total is $${price}`}
			image="https://svgshare.com/i/Xfm.svg"
			label="💳 Pay Now"
			name="Clothing Ltd."
			panelLabel="Pay Now"
			shippingAddress
			stripeKey={publishableKey}
			token={onToken}
		/>
	);
};
