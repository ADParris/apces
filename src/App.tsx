import { Box, ChakraProvider } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';

import '@fontsource/open-sans-condensed';
import { theme } from './constants';

import { HomePage, ShopPage } from './pages';
import { Header } from './components';

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Header />
			<Box minH="100vh" p="1.25rem 3.75rem">
				<Switch>
					<Route path="/shop" component={ShopPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</Box>
		</ChakraProvider>
	);
};
