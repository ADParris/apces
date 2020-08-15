import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GlobalStyle from './constants/globalStyle'

import HomePage from './pages/HomePage'

const App = () => (
	<>
		<GlobalStyle />
		<Switch>
			<Route path="/" component={HomePage} />
		</Switch>
	</>
)

export default App
