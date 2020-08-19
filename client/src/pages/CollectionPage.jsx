import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { selectCollection } from '../redux/shop/shopSelectors'

const CollectionPage = ({ collection }) => {
	console.log(collection)
	return (
		<StyledCollectionPage>
			<h2>Collection Page</h2>
		</StyledCollectionPage>
	)
}

const StyledCollectionPage = styled.div``

const mapStateToProps = (
	state,
	{
		match: {
			params: { collectionId },
		},
	}
) => ({ collection: selectCollection(collectionId)(state) })

export default connect(mapStateToProps)(CollectionPage)
