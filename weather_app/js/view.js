import { weatherData, getUrl } from './data.js';
import { storage } from './storage.js';

export const UI_ELEMENTS = {
  FORMS: document.querySelectorAll('.form'),
  SEARCH_INPUT: document.querySelector('.search-form-weather__input'),

  CITIES_LIST: document.querySelector('.locations-form-weather__list'),
  ADD_SITY_BTN: document.querySelector('.now-item__like'),

  NOW_TEMP: document.querySelector('.now-item__temperature'),
  NOW_CITY_NAME: document.querySelector('.now-item__town'),
  NOW_WEATHER_ICON: document.querySelector('.now-item__icon img'),

  DETAILS_SITY_NAME: document.getElementById('details-city-name'),
  DETAILS_TEMP: document.getElementById('details-temp'),
  DETAILS_DESCR: document.getElementById('details-descr'),
  DETAILS_FEELS_LIKE: document.getElementById('details-feels-like'),
  DETAILS_SUNRISE: document.getElementById('details-sunrise'),
  DETAILS_SUNSET: document.getElementById('details-sunset'),

  FORECAST_CITY_NAME: document.querySelector('.forecast__town'),
  FORECAST_LIST: document.querySelector('.forecast__list'),

  TAB: document.querySelector('.tab')
};

export const render = {
  renderNow() {
    const weatherInCity = weatherData.weatherInCity;
  
    UI_ELEMENTS.NOW_TEMP.textContent = weatherInCity.temp;
    UI_ELEMENTS.NOW_CITY_NAME.textContent = weatherInCity.cityName;
    UI_ELEMENTS.NOW_WEATHER_ICON.src = getUrl(null, 'icons', weatherInCity.icon, '@4x');
  
    storage.saveCurrentCity(weatherInCity.cityName);
    
    if ( weatherData.favoriteCities.includes(weatherInCity.cityName) ) {
      UI_ELEMENTS.ADD_SITY_BTN.classList.add('active');
    } else {
      UI_ELEMENTS.ADD_SITY_BTN.classList.remove('active');
    }
  },
  
  renderDetails() {
    const weatherInCity = weatherData.weatherInCity;
  
    UI_ELEMENTS.DETAILS_SITY_NAME.textContent = weatherInCity.cityName;
    UI_ELEMENTS.DETAILS_TEMP.textContent = weatherInCity.temp;
    UI_ELEMENTS.DETAILS_DESCR.textContent = weatherInCity.descr;
    UI_ELEMENTS.DETAILS_FEELS_LIKE.textContent = weatherInCity.feelsLike;
    UI_ELEMENTS.DETAILS_SUNRISE.textContent = weatherInCity.sunrise;
    UI_ELEMENTS.DETAILS_SUNSET.textContent = weatherInCity.sunset;
  },
  
  renderForecast() {
    const weatherInCity = weatherData.weatherInCity;
  
    UI_ELEMENTS.FORECAST_CITY_NAME.textContent = weatherInCity.cityName;
  
    let result = '';
    UI_ELEMENTS.FORECAST_LIST.textContent = result;
  
    weatherInCity.forecast.forEach(item => {
      const elem = `
        <li class="forecast-item__item forecast-item">
          <div class="forecast-item__top">
            <div class="forecast-item__date">${item.date}</div>
            <div class="forecast-item__time">${item.time}</div>
          </div>
          <div class="forecast-item__bottom">
            <div class="forecast-item__temp">
              <div class="forecast-item__temp-current">
                Temperature: <span class="_deg">${item.temp}</span>
              </div>
              <div class="forecast-item__temp-feels-like">
                Feels like: <span class="_deg">${item.feelsLike}</span>
              </div>
            </div>
            <div class="forecast-item__icon">
              <span class="forecast-item__icon-descr">${item.descr}</span>
              <div class="forecast-item__icon-image">
                <img src="https://openweathermap.org/img/wn/${item.icon}.png" alt="Icon Weather">
                <img src="${getUrl(null, 'icons', item.icon)}" alt="Icon Weather">
              </div>
            </div>
          </div>
        </li>
      `;
  
      result += elem;
    });
  
    UI_ELEMENTS.FORECAST_LIST.insertAdjacentHTML('beforeend', result);
  },

  renderFavoriteList(cityName) {
    const elem = `
      <li class="locations-form-weather__item">
        <button type="submit" class="locations-form-weather__button">${cityName}</button>
        <button type="button" class="locations-form-weather__delete _icon-delete"></button>
      </li>
    `;
  
    UI_ELEMENTS.CITIES_LIST.insertAdjacentHTML('afterbegin', elem);
    UI_ELEMENTS.ADD_SITY_BTN.classList.add('active');
  },

  tabInit(tab) {
    const btns = tab.querySelectorAll('.tab__btn');
    const items = tab.querySelectorAll('.tab__item');
    
    btns.forEach(tabBtn => {
  
      tabBtn.addEventListener('click', function () {
        btns.forEach( el => el.classList.remove('active') );
    
        this.classList.add('active');
    
        const attrTabBtn = this.dataset.tab;
    
        items.forEach( tabItem => {
          tabItem.classList.remove('active');
    
          if ( tabItem.classList.contains(attrTabBtn) ) {
            tabItem.classList.add('active');
          }
        });
      });
      
    });
  }
};

export const actions = {
  addCityInFavoriteList() {
    const cityName = weatherData.weatherInCity.cityName;
  
    if ( weatherData.favoriteCities.includes(cityName) ) return;
    
    weatherData.favoriteCities.push(cityName);
  
    storage.saveFavoriteCities(weatherData.favoriteCities);
    render.renderFavoriteList(cityName);
    actions.getDeleteButtons();
  },

  getDeleteButtons() {
    const deleteBtns = UI_ELEMENTS.CITIES_LIST.querySelectorAll('.locations-form-weather__delete');
    
    deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeCityFromList));
  },

  getCityName(e) {
    const isListForm = e.target.classList.contains('locations-form-weather');
    return (isListForm) ? e.submitter.textContent : UI_ELEMENTS.SEARCH_INPUT.value.trim();
  },
};

function removeCityFromList() {
  const cityName = this.previousElementSibling.textContent;
  
  this.parentElement.remove();
  weatherData.favoriteCities = weatherData.favoriteCities.filter(item => item !== cityName);
  storage.saveFavoriteCities(weatherData.favoriteCities);

  if (cityName === weatherData.weatherInCity.cityName) {
    UI_ELEMENTS.ADD_SITY_BTN.classList.remove('active');
  }
}
