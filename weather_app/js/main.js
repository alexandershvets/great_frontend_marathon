import { weatherData, getWeatherJson, errorHandler, getUrl } from './data.js';
import {
  UI_ELEMENTS,
  renderUINow,
  renderUIDetails,
  renderUIForecast,
  renderUIFavoruteList,
  addCityInFavoriteList,
  getDeleteButtons,
  getCityName
} from './view.js';

sendRequest( getUrl(weatherData.currentCity) );

UI_ELEMENTS.FORMS.forEach(form => form.addEventListener('submit', formHundler));

function formHundler(e) {
  e.preventDefault();

  sendRequest( getUrl( getCityName(e) ) );
  
  this.reset();
}

function sendRequest(url) {
  getWeatherJson(url)
    .then(weatherData.collectWeather)
    .then(renderUINow)
    .then(renderUIDetails)
    .then(() => {
      getWeatherJson( getUrl(weatherData.weatherInCity.cityName, 'forecast') )
        .then(weatherData.collectForecastWeather)
        .then(renderUIForecast);
    })
    .catch(errorHandler);
}

UI_ELEMENTS.ADD_SITY_BTN.addEventListener('click', addCityInFavoriteList);
weatherData.favoriteCities.forEach(favoriteCity => renderUIFavoruteList(favoriteCity));

getDeleteButtons();