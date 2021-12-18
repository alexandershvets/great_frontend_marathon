import { UI_ELEMENTS } from './view.js';

const API = {
  SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
  KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
};

const url = getUrl('Saint Petersburg');
showWeather(url);

UI_ELEMENTS.FORMS.forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const url = getUrl( getCityName(e) );

    showWeather(url);
    
    this.reset();
  });
});

function showWeather(url) {
  fetch(url)
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
    })
    .then(data => {
      return new Promise((resolve, reject) => {
        const weatherInCity = {
          cityName: data.name,
          temp: Math.round(data.main.temp),
          descr: data.weather[0].main,
          icon: data.weather[0].icon
        };

        UI_ELEMENTS.TEMP.textContent = weatherInCity.temp;
        UI_ELEMENTS.SITY_NAME.textContent = weatherInCity.cityName;
        UI_ELEMENTS.WEATHER_ICON.src = `http://openweathermap.org/img/wn/${weatherInCity.icon}@4x.png`;

        if ( checkCityInList(weatherInCity.cityName) ) {
          UI_ELEMENTS.ADD_SITY_BTN.classList.add('active');
        } else {
          UI_ELEMENTS.ADD_SITY_BTN.classList.remove('active');
        }

        resolve(weatherInCity);
      });
    })
    .catch(error => {
      alert(error.message);
    });
}

function getCityName(e) {
  const isListForm = e.target.classList.contains('locations-form-weather');
  return (isListForm) ? e.submitter.textContent : UI_ELEMENTS.SERACH_INPUT.value.trim();
}

function getUrl(param) {
  return `${API.SERVER_URL}?q=${param}&units=metric&appid=${API.KEY}`;
}

UI_ELEMENTS.ADD_SITY_BTN.addEventListener('click', addSityInList);

function addSityInList() {
  const cityName = UI_ELEMENTS.SITY_NAME.textContent;

  const elem = `
    <li class="locations-form-weather__item">
      <button type="submit" class="locations-form-weather__button">${cityName}</button>
      <button type="button" class="locations-form-weather__delete _icon-delete"></button>
    </li>
  `;

  if (checkCityInList(cityName)) {
    return;
  }

  UI_ELEMENTS.ADD_SITY_BTN.classList.add('active');
  UI_ELEMENTS.CITIES_LIST.insertAdjacentHTML('afterbegin', elem);

  getDeleteButtons();
}

function removeSityFromList() {
  this.closest('.locations-form-weather__item').remove();

  const cityName = this.previousElementSibling.textContent;

  if (cityName === UI_ELEMENTS.SITY_NAME.textContent) {
    UI_ELEMENTS.ADD_SITY_BTN.classList.remove('active');
  }
}

function getDeleteButtons() {
  const deleteBtns = document.querySelectorAll('.locations-form-weather__delete');
  
  deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', removeSityFromList);
  });
}
getDeleteButtons();

function checkCityInList(cityName) {
  const btns = document.querySelectorAll('.locations-form-weather__button');
  let result = false;

  btns.forEach(btn => {
    if (cityName === btn.textContent) result = true;
  });

  return result;
}


tabInit(UI_ELEMENTS.TAB);

function tabInit(tab) {
  const btns = tab.querySelectorAll('.tab__btn');
  const items = tab.querySelectorAll('.tab__item');
  
  btns.forEach( tabBtn => {

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
