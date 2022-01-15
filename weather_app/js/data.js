import { storage } from './storage.js';

export const API = {
  SERVER_URL: 'https://api.openweathermap.org/data/2.5/',
  SERVER_ICONS_URL: 'https://openweathermap.org/img/wn/',
  KEY: '8d205e2f51d2fa2c11b2c460a8bba879'
};

const DEFAULT_CITY_NAME = 'Cape Town';

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
  currentCity: storage.getCurrentCity() || DEFAULT_CITY_NAME,

  collectDataWeather(data) {
    console.log(weatherData.weatherInCity);
    const { name, main: { temp, feels_like }, weather, sys: { sunrise, sunset } } = data;

    weatherData.weatherInCity.cityName = name;
    weatherData.weatherInCity.temp = Math.round(temp);
    weatherData.weatherInCity.descr = weather[0].main;
    weatherData.weatherInCity.icon = weather[0].icon;
    weatherData.weatherInCity.feelsLike = Math.round(feels_like);
    weatherData.weatherInCity.sunrise = convertTime(sunrise);
    weatherData.weatherInCity.sunset = convertTime(sunset);
  },

  collectDataForecastWeather(response) {
    weatherData.weatherInCity.forecast = [];
  
    response.list.forEach(item => {
      const { dt, main: {temp, feels_like}, weather } = item;
      
      weatherData.weatherInCity.forecast.push({
        date: convertDate(dt),
        time: convertTime(dt),
        temp: Math.round(temp),
        feelsLike: Math.round(feels_like),
        descr: weather[0].main,
        icon: weather[0].icon,
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

function convertTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  const formattedTime = hours + ':' + minutes.slice(-2);

  return formattedTime;
}

function convertDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.toLocaleString('en-US', { day: "numeric" });
  const month = date.toLocaleString('en-US', { month: "short" });

  const formattedDate = `${day} ${month}`;

  return formattedDate;
}