import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '../layout/Layout'

import Overview from '../components/Collection/Overview'
import Collection from '../components/Collection'

const ShopPage = ({ match }) => (
	<Layout>
		<Switch>
			<Route path={`${match.path}/:collectionId`} component={Collection} />
			<Route path={`${match.path}`} component={Overview} />
		</Switch>
	</Layout>
)

export default ShopPage
