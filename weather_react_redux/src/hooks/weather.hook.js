import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather, fetchForecast } from '../actions'
import { useWeatherService } from '../services/WeatherService';

export function useWeather(process) {
  const { currentCity, weatherLoadingStatus, weather } = useSelector(state => state.weather);
  const { forecast, forecastLoadingStatus } = useSelector(state => state.forecast);
  const dispatch = useDispatch();
  const { getWeather, getForecastWeather } = useWeatherService();

  useEffect(() => {
    switch (process) {
      case 'weather':
        dispatch( fetchWeather(getWeather, currentCity) );
        break;
      case 'forecast':
        dispatch( fetchForecast(getForecastWeather, currentCity) );
        break;
      default:
        throw new Error(`Unexpected process: ${process}`);
    }
  }, [currentCity]);

  return {
    currentCity,
    weatherLoadingStatus,
    weather,
    forecastLoadingStatus,
    forecast
  };
}