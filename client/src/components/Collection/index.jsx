import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import CollectionItem from './Item'

import { selectCollection } from '../../redux/shop/shopSelectors'

const CollectionPage = ({ collection }) => {
	const { title, items } = collection
	return (
		<StyledCollectionPage>
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</StyledCollectionPage>
	)
}

const StyledCollectionPage = styled.div`
	flex-direction: column;
	display: flex;

	.title {
		margin: 0 auto 3rem;
		font-size: 3.8rem;
	}

	.items {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 1rem;
		display: grid;
	}

	& .collection-item {
		margin-bottom: 3rem;
	}
`

const mapStateToProps = (
	state,
	{
		match: {
			params: { collectionId },
		},
	}
) => ({ collection: selectCollection(collectionId)(state) })

export default connect(mapStateToProps)(CollectionPage)
