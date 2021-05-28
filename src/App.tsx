import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth, firebase } from './services';

import '@fontsource/open-sans-condensed';
import { theme } from './constants';

import { AuthPage, HomePage, ShopPage } from './pages';
import { Header } from './components';

export const App: React.FC = () => {
	const [currentUser, setCurrentUser] =
		React.useState<firebase.User | null>(null);

	React.useEffect(() => {
		const unsubscribeFromAuth = auth().onAuthStateChanged(user => {
			setCurrentUser(user);
			console.log(user);
		});

		return () => unsubscribeFromAuth();
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Header currentUser={currentUser} />
			<Box minH="100vh" p="1.25rem 3.75rem">
				<Switch>
					<Route path="/signin" component={AuthPage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</Box>
		</ChakraProvider>
	);
};
