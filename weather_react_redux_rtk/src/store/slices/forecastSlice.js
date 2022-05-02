import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { useWeatherService } from '../../services/WeatherService';

const initialState = {
  forecast: [],
  forecastLoadingStatus: 'idle'
};

export const fetchForecast = createAsyncThunk(
  'forecast/fetchForecast',
  (cityName) => {
    const { getForecastWeather } = useWeatherService();
    return getForecastWeather(cityName);
  }
);

const forecastSlice = createSlice({
  name: 'forecast',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.forecastLoadingStatus = 'loading';
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
        state.forecastLoadingStatus = 'completed';
      })
      .addCase(fetchForecast.rejected, (state) => {
        state.forecastLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  }
});

const { actions, reducer } = forecastSlice;

export default reducer;

export const {
  forecastFetching,
  forecastFetched,
  forecastFetchingError
} = actions;