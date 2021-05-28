import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { auth, getCurrentUser } from './services';

import '@fontsource/open-sans-condensed';
import { theme } from './constants';

import { AuthPage, HomePage, ShopPage } from './pages';
import { Header } from './components';
import { IUser } from './models';
import { setCurrentUser } from './redux/system';

export const App: React.FC = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		const unsubscribeFromAuth = auth().onAuthStateChanged(async user => {
			let loggedInUser: IUser | null;
			if (user) {
				loggedInUser = await getCurrentUser({ user });
				if (!loggedInUser) {
					loggedInUser = await getCurrentUser({ user });
				}
				dispatch(setCurrentUser(loggedInUser));
			} else {
				dispatch(setCurrentUser(null));
			}
		});

		return () => unsubscribeFromAuth();
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Header />
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
