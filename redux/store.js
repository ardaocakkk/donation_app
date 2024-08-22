import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {logger} from 'redux-logger';
import User from './reducers/User';
import {reduxStorage} from '../mmkv/mmkvStorage';
import Categories from './reducers/Categories';
import DonationItems from './reducers/DonationItems';

const rootReducer = combineReducers({
  user: User.reducer,
  categories: Categories.reducer,
  donationItems: DonationItems.reducer,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

const persistor = persistStore(store);

export {store, persistor};
