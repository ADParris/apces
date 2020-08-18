import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import { auth, createUserProfileDocument } from './api/firebase.utils'

import { setCurrentUser } from './redux/user/userActions'

import GlobalStyle from './constants/globalStyle'

import AuthPage from './pages/AuthPage'
import ShopPage from './pages/ShopPage'
import HomePage from './pages/HomePage'

import Header from './components/Header'

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
		<>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route
					path="/signin"
					render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
				/>
				<Route path="/shop" component={ShopPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</>
	)
}

const mapStateToProps = ({ user: { currentUser } }) => ({ currentUser })

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
