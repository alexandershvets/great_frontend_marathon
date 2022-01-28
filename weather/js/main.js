import './tabs.js';
import { UI_ELEMENTS, renderNow, renderDetails, renderForecast, renderFavoriteList, deleteBtnsInit } from './view.js';
import { currentCity, favoriteCities, getWeatherData, WeatherCityData, collectForecastInWeatherData, addCityInFavoriteList } from './data.js';
import * as storage from './storage.js';
import { getCityName, getUrl } from './hellpers.js';


sendRequest( getUrl(currentCity) );

UI_ELEMENTS.FORMS.forEach(form => form.addEventListener('submit', formHundler));

function formHundler(e) {
  e.preventDefault();

  sendRequest( getUrl( getCityName(e) ) );
  
  this.reset();
}

async function sendRequest(url) {
  const weatherData = await getWeatherData(url);
  const weatherCityData = new WeatherCityData(weatherData);

  renderNow(weatherCityData);
  renderDetails(weatherCityData);

  const forecastData = await getWeatherData( getUrl(weatherCityData.cityName, 'forecast') );
  weatherCityData.forecast = collectForecastInWeatherData(forecastData);

  renderForecast(weatherCityData);

  storage.saveCurrentCity(weatherCityData.cityName);
}

UI_ELEMENTS.ADD_SITY_BTN.addEventListener('click', addCityInFavoriteListHandler);

function addCityInFavoriteListHandler() {
  const currentCity = storage.getCurrentCity();
  const favoriteCities = storage.getFavoriteCities();

  if ( favoriteCities.includes(currentCity) ) return;
  
  addCityInFavoriteList(currentCity);
  renderFavoriteList(currentCity);

  UI_ELEMENTS.ADD_SITY_BTN.classList.add('active');

  deleteBtnsInit();
}

favoriteCities.forEach(favoriteCity => renderFavoriteList(favoriteCity));

deleteBtnsInit();