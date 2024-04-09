import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { nannyReducer } from './nannysSlice.js';
import { favoriteReducer } from './favoriteSlice.js';
import { filterReducer } from './filterSlice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PERSIST,
  PURGE,
  PAUSE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const persitsConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    nanny: nannyReducer,
    filter: favoriteReducer,
    favorites: persistReducer(persitsConfig, filterReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PERSIST, PAUSE, PURGE, REGISTER, REHYDRATE],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
