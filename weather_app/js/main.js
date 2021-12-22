import { UI_ELEMENTS, tabInit } from './view.js';
import { storage } from './storage.js';
import { convertTime } from './hellp.js';

const API = {
  SERVER_URL: 'https://api.openweathermap.org/data/2.5/weather',
  KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
};

let weatherInCity = {
  cityName: null,
  temp: null,
  descr: null,
  icon: null,
  feelsLike: null,
  sunrise: null,
  sunset: null
};

let favoriteCities = storage.getFavoriteCities() || [];
const currentCity = storage.getCurrentCity() || 'Saint Petersburg';

sendRequest( getUrl(currentCity) );

UI_ELEMENTS.FORMS.forEach(form => form.addEventListener('submit', formHundler));

function formHundler(e) {
  e.preventDefault();

  sendRequest( getUrl( getCityName(e) ) );
  
  this.reset();
}

function sendRequest(url) {
  getJson(url)
    .then(collectWeatherInCity)
    .then(renderUINow)
    .then(renderUIDetails)
    .catch(errorHandler);
}

function getJson(url) {
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

function collectWeatherInCity(data) {
  weatherInCity.cityName = data.name;
  weatherInCity.temp = Math.round(data.main.temp);
  weatherInCity.descr = data.weather[0].main;
  weatherInCity.icon = data.weather[0].icon;
  weatherInCity.feelsLike = data.main.feels_like;
  weatherInCity.sunrise = data.sys.sunrise;
  weatherInCity.sunset = data.sys.sunset;

  return weatherInCity;
}

function errorHandler(error) {
  alert(error.message);
}

function renderUINow(weatherInCity) {
  UI_ELEMENTS.NOW_TEMP.textContent = weatherInCity.temp;
  UI_ELEMENTS.NOW_CITY_NAME.textContent = weatherInCity.cityName;
  UI_ELEMENTS.NOW_WEATHER_ICON.src = `http://openweathermap.org/img/wn/${weatherInCity.icon}@4x.png`;

  storage.saveCurrentCity(weatherInCity.cityName);
  
  if ( favoriteCities.includes(weatherInCity.cityName) ) {
    UI_ELEMENTS.ADD_SITY_BTN.classList.add('active');
  } else {
    UI_ELEMENTS.ADD_SITY_BTN.classList.remove('active');
  }

  return weatherInCity;
}

function renderUIDetails(weatherInCity) {
  UI_ELEMENTS.DETAILS_SITY_NAME.textContent = weatherInCity.cityName;
  UI_ELEMENTS.DETAILS_TEMP.textContent = weatherInCity.temp;
  UI_ELEMENTS.DETAILS_DESCR.textContent = weatherInCity.descr;
  UI_ELEMENTS.DETAILS_FEELS_LIKE.textContent = weatherInCity.feelsLike;
  UI_ELEMENTS.DETAILS_SUNRISE.textContent = convertTime(weatherInCity.sunrise);
  UI_ELEMENTS.DETAILS_SUNSET.textContent = convertTime(weatherInCity.sunset);

  return weatherInCity;
}

function getCityName(e) {
  const isListForm = e.target.classList.contains('locations-form-weather');
  return (isListForm) ? e.submitter.textContent : UI_ELEMENTS.SEARCH_INPUT.value.trim();
}

function getUrl(cityName) {
  return `${API.SERVER_URL}?q=${cityName}&units=metric&appid=${API.KEY}`;
}

UI_ELEMENTS.ADD_SITY_BTN.addEventListener('click', addCityInFavoriteList);

function addCityInFavoriteList() {
  const cityName = weatherInCity.cityName;

  if ( favoriteCities.includes(cityName) ) return;
  
  favoriteCities.push(cityName);

  storage.saveFavoriteCities(favoriteCities);

  renderUIFavoruteList(cityName);

  getDeleteButtons();
}

favoriteCities.forEach(favoriteCity => renderUIFavoruteList(favoriteCity));

function renderUIFavoruteList(cityName) {
  const elem = `
    <li class="locations-form-weather__item">
      <button type="submit" class="locations-form-weather__button">${cityName}</button>
      <button type="button" class="locations-form-weather__delete _icon-delete"></button>
    </li>
  `;

  UI_ELEMENTS.CITIES_LIST.insertAdjacentHTML('afterbegin', elem);
  UI_ELEMENTS.ADD_SITY_BTN.classList.add('active');
}

function getDeleteButtons() {
  const deleteBtns = UI_ELEMENTS.CITIES_LIST.querySelectorAll('.locations-form-weather__delete');
  
  deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeSityFromList));
}
getDeleteButtons();

function removeSityFromList() {
  const cityName = this.previousElementSibling.textContent;
  
  this.parentElement.remove();
  favoriteCities = favoriteCities.filter(item => item !== cityName);
  storage.saveFavoriteCities(favoriteCities);

  if (cityName === weatherInCity.cityName) {
    UI_ELEMENTS.ADD_SITY_BTN.classList.remove('active');
  }
}

tabInit(UI_ELEMENTS.TAB);
