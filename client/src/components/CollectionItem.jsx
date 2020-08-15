import React from 'react'
import styled from 'styled-components'

const CollectionItem = ({ imageUrl, name, price }) => (
	<StyledCollectionItem img={imageUrl}>
		<div className="image" />
		<div className="item-metadata">
			<span className="name">{name}</span>
			<span className="price">${price}</span>
		</div>
	</StyledCollectionItem>
)

const StyledCollectionItem = styled.div`
	flex-direction: column;
	align-items: center;
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
`

export default CollectionItem
