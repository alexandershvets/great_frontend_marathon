import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/weather';
import { fetchForecast } from '../actions/forecast';
import { getWeather, getForecast } from '../selectors/selectors';
import { useWeatherService } from '../services/WeatherService';

export function useWeather(process) {
  const { currentCity, weatherLoadingStatus, weather } = useSelector(getWeather);
  const { forecast, forecastLoadingStatus } = useSelector(getForecast);
  const dispatch = useDispatch();
  const { getWeather: getWeatherDate, getForecastWeather } = useWeatherService();

  useEffect(() => {
    switch (process) {
      case 'weather':
        dispatch( fetchWeather(getWeatherDate, currentCity) );
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