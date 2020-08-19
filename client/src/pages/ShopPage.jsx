import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './Layout'

import CollectionOverview from '../components/Collection/CollectionOverview'
import CollectionPage from './CollectionPage'

const ShopPage = ({ match }) => (
	<Layout>
		<Switch>
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
			<Route path={`${match.path}`} component={CollectionOverview} />
		</Switch>
	</Layout>
)

export default ShopPage
