import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'

import notesReducer from '../actions/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, notesReducer);


export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);