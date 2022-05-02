import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../store/slices/weatherSlice';
import { fetchForecast } from '../store/slices/forecastSlice';
import { getWeather, getForecast } from '../store/selectors/selectors';

export function useWeather(process) {
  const { currentCity, weatherLoadingStatus, weather } = useSelector(getWeather);
  const { forecast, forecastLoadingStatus } = useSelector(getForecast);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (process) {
      case 'weather':
        dispatch( fetchWeather(currentCity) );
        break;
      case 'forecast':
        dispatch( fetchForecast(currentCity) );
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