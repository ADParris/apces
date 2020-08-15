import React from 'react'

import Layout from './Layout'

import collections from '../constants/shop.data'

import CollectionPreview from '../components/CollectionPreview'

const ShopPage = () => (
	<Layout>
		{collections.map(({ id, ...otherProps }) => (
			<CollectionPreview key={id} {...otherProps} />
		))}
	</Layout>
)

export default ShopPage
