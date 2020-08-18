import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import CustomButton from './CustomButton'

import { addItem } from '../redux/cart/cartActions'

const CollectionItem = ({ addItem, item }) => {
	const { imageUrl, name, price } = item

	return (
		<StyledCollectionItem img={imageUrl}>
			<div className="image" />
			<div className="item-metadata">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				ADD TO CART
			</CustomButton>
		</StyledCollectionItem>
	)
}

const StyledCollectionItem = styled.div`
	flex-direction: column;
	align-items: center;
	position: relative;
	display: flex;
	height: 35rem;
	width: 22%;

	.image {
		background-image: url(${props => props.img});
		background-position: center;
		background-size: cover;
		margin-bottom: 0.5rem;
		height: 95%;
		width: 100%;
	}

	.item-metadata {
		justify-content: space-between;
		font-size: 1.8rem;
		display: flex;
		width: 100%;
		height: 5%;

		.name {
			margin-bottom: 1.5rem;
			width: 90%;
		}

		.price {
			width: 10%;
		}
	}

	button {
		position: absolute;
		display: none;
		top: 25.5rem;
		opacity: 0.7;
		width: 80%;
	}

	&:hover {
		.image {
			opacity: 0.8;
		}

		button {
			opacity: 0.85;
			display: flex;
		}
	}
`

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
