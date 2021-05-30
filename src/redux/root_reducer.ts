import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './cart/reducer';
import { directoryReducer } from './directory/reducer';
import { shopReducer } from './shop/reducer';
import { userReducer } from './user/reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'directory', 'shop'],
};

export const rootReducer = combineReducers({
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
	user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
