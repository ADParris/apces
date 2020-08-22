import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Layout from '../layout/Layout'

import Overview from '../components/Collection/Overview'
import Collection from '../components/Collection'

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../api/firebase.utils'

import { updateCollections } from '../redux/shop/shopActions'

import WithSpinner from '../components/Shared/WithSpinner'

const CollectionWithSpinner = WithSpinner(Collection)
const OverviewWithSpinner = WithSpinner(Overview)

const ShopPage = ({ match, updateCollections }) => {
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		const collectionRef = firestore.collection('collections')
		const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
			updateCollections(collectionsMap)
			setLoading(false)
		})
		return () => unsubscribeFromSnapshot()
	}, [])

	return (
		<Layout>
			<Switch>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}`}
					render={props => (
						<OverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</Switch>
		</Layout>
	)
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap =>
		dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
