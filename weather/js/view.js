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

export function renderNow(weatherCityData) {
  const { cityName, icon, temp } = weatherCityData;

  UI_ELEMENTS.NOW.TEMP.textContent = temp;
  UI_ELEMENTS.NOW.CITY_NAME.textContent = cityName;
  UI_ELEMENTS.NOW.WEATHER_ICON.src = getUrl(null, 'icons', icon, '@4x');
}

export function renderDetails(weatherCityData) {
  const { cityName, temp, feelsLike, descr, sunrise, sunset } = weatherCityData;
  
  UI_ELEMENTS.DETAILS.SITY_NAME.textContent = cityName;
  UI_ELEMENTS.DETAILS.TEMP.textContent = temp;
  UI_ELEMENTS.DETAILS.FEELS_LIKE.textContent = feelsLike;
  UI_ELEMENTS.DETAILS.DESCR.textContent = descr;
  UI_ELEMENTS.DETAILS.SUNRISE.textContent = sunrise;
  UI_ELEMENTS.DETAILS.SUNSET.textContent = sunset;
}

export function renderForecast(weatherCityData) {
  const { cityName, forecast } = weatherCityData;

  UI_ELEMENTS.FORECAST.CITY_NAME.textContent = cityName;
  
  let result = '';

  forecast.forEach(forecastItem => {
    result += getForcastElem(forecastItem);
  });

  UI_ELEMENTS.FORECAST.LIST.insertAdjacentHTML('beforeend', result);
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

export function renderFavoriteList() {
  console.log(11);
}