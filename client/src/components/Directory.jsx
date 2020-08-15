import React from 'react'
import styled from 'styled-components'

import sections from '../constants/directory.data'

import MenuItem from './MenuItem'

const Directory = () => (
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

export default Directory
