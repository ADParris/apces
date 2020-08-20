import React from 'react'
import styled from 'styled-components'

import Item from './Item'

const Preview = ({ items, title }) => (
	<StyledPreview>
		<h2>{title.toUpperCase()}</h2>
		<div className="preview">
			{items
				.filter((item, index) => index < 4)
				.map(item => (
					<Item key={item.id} item={item} />
				))}
		</div>
	</StyledPreview>
)

const StyledPreview = styled.div`
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

export default Preview
