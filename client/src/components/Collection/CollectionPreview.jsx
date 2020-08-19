import React from 'react'
import styled from 'styled-components'

import CollectionItem from './CollectionItem'

const CollectionPreview = ({ items, title }) => (
	<StyledCollectionPreview>
		<h2>{title.toUpperCase()}</h2>
		<div className="preview">
			{items
				.filter((item, index) => index < 4)
				.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</StyledCollectionPreview>
)

const StyledCollectionPreview = styled.div`
	flex-direction: column;
	margin-bottom: 3rem;
	display: flex;
	width: 100%;

	.title {
		margin-bottom: 2.5rem;
		font-size: 2.8rem;
	}

	.preview {
		justify-content: space-between;
		display: flex;
	}
`

export default CollectionPreview
