import './tabs.js';
import { UI_ELEMENTS, renderNow, renderDetails, renderForecast, renderFavoriteList } from './view.js';
import { currentCity, getWeatherData, WeatherCityData, collectForecastInWeatherData, addCityInFavoriteList } from './data.js';
import * as storage from './storage.js';
import { getCityName, getUrl } from './hellpers.js';


sendRequest( getUrl(currentCity) );

UI_ELEMENTS.FORMS.forEach(form => form.addEventListener('submit', formHundler));

function formHundler(e) {
  e.preventDefault();

  sendRequest( getUrl( getCityName() ) );
  
  this.reset();
}

async function sendRequest(url) {
  const weatherData = await getWeatherData(url);
  const weatherCityData = new WeatherCityData(weatherData);

  const forecastData = await getWeatherData( getUrl(weatherCityData.cityName, 'forecast') );
  weatherCityData.forecast = collectForecastInWeatherData(forecastData);

  renderNow(weatherCityData);
  renderDetails(weatherCityData);
  renderForecast(weatherCityData);

  storage.saveCurrentCity(weatherCityData.cityName);
}

UI_ELEMENTS.ADD_SITY_BTN.addEventListener('click', function () {
  const currentCity = storage.getCurrentCity();

  renderFavoriteList();
});