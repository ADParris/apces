import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Redirect, Route, Switch } from 'react-router-dom'

import { auth, createUserProfileDocument } from './api/firebase.utils'

import { selectCurrentUser } from './redux/user/userSelectors'
import { setCurrentUser } from './redux/user/userActions'

import CheckoutPage from './pages/CheckoutPage'
import AuthPage from './pages/AuthPage'
import ShopPage from './pages/ShopPage'
import HomePage from './pages/HomePage'

const App = ({ currentUser, setCurrentUser }) => {
	React.useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)
				userRef.onSnapshot(snapShot =>
					setCurrentUser({ id: snapShot.id, ...snapShot.data() })
				)
			} else {
				setCurrentUser(userAuth)
			}
		})
		return () => unsubscribeFromAuth()
	}, [])

	return (
		<Switch>
			<Route
				path="/signin"
				render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
			/>
			<Route path="/shop" component={ShopPage} />
			<Route path="/checkout" component={CheckoutPage} />
			<Route path="/" component={HomePage} />
		</Switch>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
