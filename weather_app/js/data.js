import { storage } from './storage.js';

export const API = {
  SERVER_URL: 'https://api.openweathermap.org/data/2.5/',
  SERVER_ICONS_URL: 'https://openweathermap.org/img/wn/',
  KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
};

export const weatherData = {
  weatherInCity: {
    cityName: null,
    temp: null,
    descr: null,
    icon: null,
    feelsLike: null,
    sunrise: null,
    sunset: null,
    forecast: null
  },

  favoriteCities: storage.getFavoriteCities() || [],
  currentCity: storage.getCurrentCity() || 'Cape Town',

  collectWeather(data) {
    weatherData.weatherInCity.cityName = data.name;
    weatherData.weatherInCity.temp = Math.round(data.main.temp);
    weatherData.weatherInCity.descr = data.weather[0].main;
    weatherData.weatherInCity.icon = data.weather[0].icon;
    weatherData.weatherInCity.feelsLike = Math.round(data.main.feels_like);
    weatherData.weatherInCity.sunrise = convertTime(data.sys.sunrise);
    weatherData.weatherInCity.sunset = convertTime(data.sys.sunset);
  },

  collectForecastWeather(response) {
    weatherData.weatherInCity.forecast = [];
  
    response.list.forEach(item => {
      weatherData.weatherInCity.forecast.push({
        date: convertTime(item.dt),
        time: convertTime(item.dt),
        temp: Math.round(item.main.temp),
        feelsLike: Math.round(item.main.feels_like),
        descr: item.weather[0].main,
        icon: item.weather[0].icon,
      });
    });
  }
};

export function getWeatherJson(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      if (response.status === 400) {
        throw new Error('Nothing to geocode');
      }

      if (response.status === 404) {
        throw new Error('City not found');
      }
    });
}

export function errorHandler(error) {
  alert(error.message);
}

export function getUrl(cityName, sought = 'weather', icon = '4n', sizeIcon = '') {
  if (sought === 'icons') {
    return `${API.SERVER_ICONS_URL}${icon}${sizeIcon}.png`;
  }

  return `${API.SERVER_URL}${sought}?q=${cityName}&units=metric&appid=${API.KEY}`;
}

export function convertTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours + ':' + minutes.slice(-2);

  return formattedTime;
}