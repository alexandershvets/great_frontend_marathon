import { useState, useEffect } from 'react';

import useWeatherService from '../services/WeatherService';
import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

function useWeather(cityName, isForecast = false) {
  const [state, setState] = useState(null);
  const { loading, error, clearError, getWeather, getForecastWeather } = useWeatherService();

  useEffect(() => {
    clearError();
    
    isForecast
      ? getForecastWeather(cityName).then(setState)
      : getWeather(cityName).then(setState);
    
  }, [cityName]);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const isContent = !(loading || error || !state);

  return {
    state,
    spinner,
    errorMessage,
    isContent
  };
}

export default useWeather;