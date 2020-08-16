import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { auth, createUserProfileDocument } from './api/firebase.utils'

import GlobalStyle from './constants/globalStyle'

import AuthPage from './pages/AuthPage'
import ShopPage from './pages/ShopPage'
import HomePage from './pages/HomePage'

import Header from './components/Header'

const App = () => {
	const [appState, setAppState] = React.useState({ currentUser: null })
	const { currentUser } = appState

	React.useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)
				userRef.onSnapshot(snapShot =>
					setAppState({
						...appState,
						currentUser: { id: snapShot.id, ...snapShot.data() },
					})
				)
			} else {
				setAppState({ ...appState, currentUser: userAuth })
			}
		})
		return () => unsubscribeFromAuth()
	}, [])

	return (
		<>
			<GlobalStyle />
			<Header currentUser={currentUser} />
			<Switch>
				<Route path="/signin" component={AuthPage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</>
	)
}

export default App
