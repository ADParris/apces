import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';

import { auth, getCurrentUser } from './services';

import { selectCurrentUser, setCurrentUser } from './redux/system';
import '@fontsource/open-sans-condensed';
import { theme } from './constants';

import { AuthPage, CheckoutPage, HomePage, ShopPage } from './pages';
import { Header } from './components';
import { IUser } from './models';

export const App: React.FC = () => {
	const dispatch = useDispatch();

	// Redux store...
	const currentUser = useSelector(selectCurrentUser);

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
		// eslint-disable-next-line
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Header />
			<Box minH="100vh" p="1.25rem 3.75rem">
				<Switch>
					<Route
						path="/signin"
						render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
					/>
					<Route path="/checkout" component={CheckoutPage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</Box>
		</ChakraProvider>
	);
};
