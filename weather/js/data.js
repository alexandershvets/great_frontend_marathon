import { convertTime, convertDate } from './hellpers.js';
import * as storage from './storage.js';

export const WEATHER_API = {
  SERVER_URL: 'https://api.openweathermap.org/data/2.5/',
  SERVER_ICONS_URL: 'https://openweathermap.org/img/wn/',
  KEY: '8d205e2f51d2fa2c11b2c460a8bba879'
};

const DEFAULT_CITY_NAME = 'Cape Town';

export const currentCity = storage.getCurrentCity() || DEFAULT_CITY_NAME;
export let favoriteCities = storage.getFavoriteCities() || new Set();

export function WeatherCityData(weatherData) {
  const { name, main: { temp, feels_like }, weather, sys: { sunrise, sunset } } = weatherData;

  this.cityName = name;
  this.temp = Math.round(temp);
  this.descr = weather[0].main;
  this.icon = weather[0].icon;
  this.feelsLike = Math.round(feels_like);
  this.sunrise = convertTime(sunrise);
  this.sunset = convertTime(sunset);
  this.forecast = null;
}

function ForecastCityData(forecastItem) {
  const { dt, main: { temp, feels_like }, weather } = forecastItem;

  this.date = convertDate(dt);
  this.time = convertTime(dt);
  this.temp = Math.round(temp);
  this.feelsLike = Math.round(feels_like);
  this.descr = weather[0].main;
  this.icon = weather[0].icon;
}

export function collectForecastInWeatherData(forecastData) {
  const forecastList = [];

  forecastData.list.forEach(forecastItem => {
    forecastList.push( new ForecastCityData(forecastItem) );
  });

  return forecastList;
}

export async function getWeatherData(url) {
  try {
    const response = await fetch(url);
    const weatherData = await response.json();

    if (response.status === 400) {
      throw new Error('Nothing to geocode');
    }
    
    if (response.status === 404) {
      throw new Error('City not found');
    }

    return weatherData;

  } catch(err) {
    alert(err.message);
  }
}

export function addCityInFavoriteList(cityName) {
  if ( Array.isArray(favoriteCities) ) {
    favoriteCities = new Set(favoriteCities);
  }

  favoriteCities.add(cityName);
  storage.saveFavoriteCities([...favoriteCities]);
}