import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'

import { selectCollections } from '../../redux/shop/shopSelectors'

import CollectionPreview from './CollectionPreview'

const CollectionOverview = ({ collections }) => (
	<StyledCollectionOverview>
		{collections.map(({ id, ...otherProps }) => (
			<CollectionPreview key={id} {...otherProps} />
		))}
	</StyledCollectionOverview>
)

const StyledCollectionOverview = styled.div`
	width: 100%;
`

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionOverview)
