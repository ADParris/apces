import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'

import MenuItem from './MenuItem'

import { selectDirectorySections } from '../redux/directory/directorySelectors'

const Directory = ({ sections }) => (
	<StyledDirectory>
		{sections.map(({ id, ...otherProps }) => (
			<MenuItem key={id} {...otherProps} />
		))}
	</StyledDirectory>
)

const StyledDirectory = styled.div`
	justify-content: space-between;
	flex-wrap: wrap;
	display: flex;
	width: 100%;
`

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
