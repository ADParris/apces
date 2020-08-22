import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStartAsync } from '../redux/shop/shopActions'
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from '../redux/shop/shopSelectors'

import Layout from '../layout/Layout'

import Overview from '../components/Collection/Overview'
import Collection from '../components/Collection'

import WithSpinner from '../components/Shared/WithSpinner'

const CollectionWithSpinner = WithSpinner(Collection)
const OverviewWithSpinner = WithSpinner(Overview)

const ShopPage = ({
	fetchCollectionsStartAsync,
	isCollectionFetching,
	isCollectionsLoaded,
	match,
}) => {
	React.useEffect(() => fetchCollectionsStartAsync(), [])

	return (
		<Layout>
			<Switch>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionWithSpinner
							isLoading={!isCollectionsLoaded}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}`}
					render={props => (
						<OverviewWithSpinner isLoading={isCollectionFetching} {...props} />
					)}
				/>
			</Switch>
		</Layout>
	)
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
