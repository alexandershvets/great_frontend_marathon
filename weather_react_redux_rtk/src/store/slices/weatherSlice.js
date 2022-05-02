import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { useWeatherService } from '../../services/WeatherService';
import { getCurrentCity } from '../../services/storage';

const initialState = {
  currentCity: getCurrentCity() || 'Cape Town',
  weather: {},
  weatherLoadingStatus: 'idle'
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  (cityName) => {
    const { getWeather } = useWeatherService();
    return getWeather(cityName)
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    weatherChangeCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.weatherLoadingStatus = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherLoadingStatus = 'completed';
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.weatherLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  }
});

const { actions, reducer } = weatherSlice;

export default reducer;

export const {
  weatherFetching,
  weatherFetched,
  weatherFetchingError,
  weatherChangeCurrentCity
} = actions;