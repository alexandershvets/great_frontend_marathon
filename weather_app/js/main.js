import { UI_ELEMENTS, render, actions } from './view.js';
import { weatherData, getWeatherJson, errorHandler, getUrl } from './data.js';

sendRequest( getUrl(weatherData.currentCity) );

UI_ELEMENTS.FORMS.forEach(form => form.addEventListener('submit', formHundler));

function formHundler(e) {
  e.preventDefault();

  sendRequest( getUrl( actions.getCityName(e) ) );
  
  this.reset();
}

function sendRequest(url) {
  getWeatherJson(url)
    .then(weatherData.collectWeather)
    .then(render.renderNow)
    .then(render.renderDetails)
    .then(() => {
      getWeatherJson( getUrl(weatherData.weatherInCity.cityName, 'forecast') )
        .then(weatherData.collectForecastWeather)
        .then(render.renderForecast);
    })
    .catch(errorHandler);
}

UI_ELEMENTS.ADD_SITY_BTN.addEventListener('click', actions.addCityInFavoriteList);

weatherData.favoriteCities.forEach(favoriteCity => render.renderFavoriteList(favoriteCity));

actions.getDeleteButtons();
render.tabInit(UI_ELEMENTS.TAB);