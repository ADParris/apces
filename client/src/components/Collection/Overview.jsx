import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'

import Preview from './Preview'

const Overview = ({ collections }) => (
	<StyledOverview>
		{collections.map(({ id, ...otherProps }) => (
			<Preview key={id} {...otherProps} />
		))}
	</StyledOverview>
)

const StyledOverview = styled.div`
	width: 100%;
`

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(Overview)
