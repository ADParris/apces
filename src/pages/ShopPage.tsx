import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { CollectionOverview } from '../components/collection/CollectionOverview';

import { CollectionPage } from './CollectionPage';

interface ComponentProps {
	match: RouteComponentProps['match'];
}

export const ShopPage: React.FC<ComponentProps> = ({ match }) => {
	return (
		<Box>
			<Switch>
				<Route
					component={CollectionPage}
					path={`${match.path}/:collectionId`}
				/>
				<Route component={CollectionOverview} path={`${match.path}`} />
			</Switch>
		</Box>
	);
};
