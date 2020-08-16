import React from 'react'
import styled from 'styled-components'

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<StyledFormInput>
		<input className="form-input" {...otherProps} onChange={handleChange} />
		{label ? (
			<label
				className={`form-input-label${
					otherProps.value.length ? ' shrink' : ''
				}`}
				htmlFor={label}
			>
				{label.toUpperCase()}
			</label>
		) : null}
	</StyledFormInput>
)

const primaryTextColor = `black`
const secondaryTextColor = `grey`

const mixinShrink = `
	color: ${primaryTextColor};
  font-size: 1.2rem;
	top: -1.4rem;
`

const StyledFormInput = styled.div`
	position: relative;
	margin: 4.5rem 0;

	.form-input {
		border-bottom: 0.1rem solid ${secondaryTextColor};
		padding: 1rem 1rem 1rem 0.5rem;
		color: ${secondaryTextColor};
		background-color: white;
		font-size: 1.8rem;
		background: none;
		border-radius: 0;
		margin: 2.5rem 0;
		display: block;
		width: 100%;

		&:focus {
			outline: none;
		}

		&:focus ~ .form-input-label {
			${mixinShrink};
		}

		input[type='password'] {
			letter-spacing: 0.3rem;
		}

		&-label {
			color: ${secondaryTextColor};
			transition: 300ms ease all;
			pointer-events: none;
			font-weight: normal;
			position: absolute;
			font-size: 1.6rem;
			left: 0.5rem;
			top: 1rem;

			&.shrink {
				${mixinShrink};
			}
		}
	}
`

export default FormInput
