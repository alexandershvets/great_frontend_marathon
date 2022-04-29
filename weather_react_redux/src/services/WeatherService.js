import { useHttp } from '../hooks/http.hook';
import { convertTime, convertDate } from '../utils/date';

const API = {
  BASE: 'https://api.openweathermap.org/data/2.5',
  KEY: '8d205e2f51d2fa2c11b2c460a8bba879'
};

export function useWeatherService() {
  const { request } = useHttp();

  const getWeather = async (cityName) => {
    const result = await request(`${API.BASE}/weather?q=${cityName}&units=metric&appid=${API.KEY}`);
    
    return _transformWeather(result);
  };

  const getForecastWeather = async (cityName) => {
    const result = await request(`${API.BASE}/forecast?q=${cityName}&units=metric&appid=${API.KEY}`);

    return result.list.map(item => _transformForecastWeather(result.city.name, item));
  };

  const _transformWeather = ({ name, main, weather, sys }) => {
    return {
      city: name,
      temp: Math.round(main.temp),
      icon: weather[0].icon,
      feelsLike: Math.round(main.feels_like),
      descr: weather[0].main,
      sunrise: convertTime(sys.sunrise),
      sunset: convertTime(sys.sunset)
    };
  };

  const _transformForecastWeather = (cityName, { dt, main, weather }) => {
    return {
      city: cityName,
      date: convertDate(dt),
      time: convertTime(dt),
      temp: Math.round(main.temp),
      feelsLike: Math.round(main.feels_like),
      descr: weather[0].main,
      icon: weather[0].icon
    };
  };

  return {
    getWeather,
    getForecastWeather
  };
}
