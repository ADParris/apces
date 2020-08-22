import React from 'react'
import styled from 'styled-components'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
	isLoading ? (
		<StyledWithSpinner>
			<div className="spinner" />
		</StyledWithSpinner>
	) : (
		<WrappedComponent {...otherProps} />
	)

const StyledWithSpinner = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	height: 60vh;
	width: 100%;

	.spinner {
		-webkit-animation: spin 1s ease-in-out infinite;
		border: 0.3rem solid rgba(195, 195, 195, 0.6);
		animation: spin 1s ease-in-out infinite;
		border-top-color: #636767;
		display: inline-block;
		border-radius: 50%;
		height: 5rem;
		width: 5rem;

		@keyframes spin {
			to {
				-webkit-transform: rotate(360deg);
			}
		}
	}
`

export default WithSpinner
