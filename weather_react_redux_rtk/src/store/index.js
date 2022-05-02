import { configureStore } from '@reduxjs/toolkit';

import weather from './slices/weatherSlice';
import forecast from './slices/forecastSlice';
import favorite from './slices/favoriteSlice';

const store = configureStore({
  reducer: {
    weather,
    forecast,
    favorite
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;