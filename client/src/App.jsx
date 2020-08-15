import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GlobalStyle from './constants/globalStyle'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'

import Header from './components/Header'

const App = () => (
	<>
		<GlobalStyle />
		<Header />
		<Switch>
			<Route path="/shop" component={ShopPage} />
			<Route path="/" component={HomePage} />
		</Switch>
	</>
)

export default App
