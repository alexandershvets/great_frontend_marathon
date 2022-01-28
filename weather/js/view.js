import { getUrl } from './hellpers.js';

export const UI_ELEMENTS = {
  FORMS: document.querySelectorAll('.form'),
  SEARCH_INPUT: document.querySelector('.search-form-weather__input'),

  CITIES_LIST: document.querySelector('.locations-form-weather__list'),
  ADD_SITY_BTN: document.querySelector('.now-item__like'),

  NOW: {
    TEMP: document.querySelector('.now-item__temperature'),
    CITY_NAME: document.querySelector('.now-item__town'),
    WEATHER_ICON: document.querySelector('.now-item__icon img'),
  },
  
  DETAILS: {
    SITY_NAME: document.getElementById('details-city-name'),
    TEMP: document.getElementById('details-temp'),
    DESCR: document.getElementById('details-descr'),
    FEELS_LIKE: document.getElementById('details-feels-like'),
    SUNRISE: document.getElementById('details-sunrise'),
    SUNSET: document.getElementById('details-sunset'),
  },
  
  FORECAST: {
    CITY_NAME: document.querySelector('.forecast__town'),
    LIST: document.querySelector('.forecast__list'),
  },

  TAB: document.querySelector('.tab')
};

export async function renderNow(weatherCityData) {
  const { cityName, icon: iconName, temp } = weatherCityData;
  const NOW = UI_ELEMENTS.NOW;

  NOW.TEMP.textContent = temp;
  NOW.CITY_NAME.textContent = cityName;
  NOW.WEATHER_ICON.src = getUrl(null, 'icons', iconName, '@4x');

  const { favoriteCities } = await import('./data.js');

  if ( [...favoriteCities].includes(cityName) ) {
    UI_ELEMENTS.ADD_SITY_BTN.classList.add('active');
  } else {
    UI_ELEMENTS.ADD_SITY_BTN.classList.remove('active');
  }
}

export function renderDetails(weatherCityData) {
  const { cityName, temp, feelsLike, descr, sunrise, sunset } = weatherCityData;
  const DETAILS = UI_ELEMENTS.DETAILS;
  
  DETAILS.SITY_NAME.textContent = cityName;
  DETAILS.TEMP.textContent = temp;
  DETAILS.FEELS_LIKE.textContent = feelsLike;
  DETAILS.DESCR.textContent = descr;
  DETAILS.SUNRISE.textContent = sunrise;
  DETAILS.SUNSET.textContent = sunset;
}

export function renderForecast(weatherCityData) {
  const { cityName, forecast } = weatherCityData;
  const FORECAST = UI_ELEMENTS.FORECAST;

  FORECAST.CITY_NAME.textContent = cityName;
  
  let result = '';
  FORECAST.LIST.textContent = result;

  forecast.forEach(forecastItem => {
    result += getForcastElem(forecastItem);
  });

  FORECAST.LIST.insertAdjacentHTML('beforeend', result);
}

export function renderFavoriteList(cityName) {
  const elem = getFavoriteElem(cityName);

  UI_ELEMENTS.CITIES_LIST.insertAdjacentHTML('afterbegin', elem);
}

function getForcastElem(forecastItem) {
  const { date, time, temp, feelsLike, descr, icon } = forecastItem;

  return `
    <li class="forecast-item__item forecast-item">
      <div class="forecast-item__top">
        <div class="forecast-item__date">${date}</div>
        <div class="forecast-item__time">${time}</div>
      </div>
      <div class="forecast-item__bottom">
        <div class="forecast-item__temp">
          <div class="forecast-item__temp-current">
            Temperature: <span class="_deg">${temp}</span>
          </div>
          <div class="forecast-item__temp-feels-like">
            Feels like: <span class="_deg">${feelsLike}</span>
          </div>
        </div>
        <div class="forecast-item__icon">
          <span class="forecast-item__icon-descr">${descr}</span>
          <div class="forecast-item__icon-image">
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Icon Weather">
            <img src="${getUrl(null, 'icons', icon)}" alt="Icon Weather">
          </div>
        </div>
      </div>
    </li>
  `;
}

function getFavoriteElem(cityName) {
  return `
    <li class="locations-form-weather__item">
      <button type="submit" class="locations-form-weather__button">${cityName}</button>
      <button type="button" class="locations-form-weather__delete _icon-delete"></button>
    </li>
  `;
}

export function deleteBtnsInit() {
  const deleteButtons = document.querySelectorAll('.locations-form-weather__delete');

  deleteButtons.forEach(deleteBtn => deleteBtn.addEventListener('click', deleteBtnHundler));
}

async function deleteBtnHundler() {
  const cityName = this.previousElementSibling.textContent;

  const storage = await import('./storage.js');
  console.log('storage: ', storage);
  
  const favoriteCities = new Set( storage.getFavoriteCities() );
  
  favoriteCities.delete(cityName);
  storage.saveFavoriteCities([...favoriteCities]);
  this.parentNode.remove();
  
  UI_ELEMENTS.ADD_SITY_BTN.classList.remove('active');
  console.log('deleteBtn');
}