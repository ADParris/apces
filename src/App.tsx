import { Box, ChakraProvider } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';

import '@fontsource/open-sans-condensed';

import { theme } from './constants';

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Box minH="100vh">
				<Switch>
					<Route path="/" component={HomePage} />
				</Switch>
			</Box>
		</ChakraProvider>
	);
};
