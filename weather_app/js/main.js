import { UI_ELEMENTS } from './view.js';

const API = {
  SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
  KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
};

const url = getUrl('Amur');
showWeather(url);

UI_ELEMENTS.SEARCH_FORM.addEventListener('submit', function (e) {
  e.preventDefault();

  const cityName = UI_ELEMENTS.SERACH_INPUT.value;
  const url = getUrl(cityName);

  showWeather(url);
  
  this.reset();
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
        const weatherInSity = {
          cityName: data.name,
          temp: Math.round(data.main.temp),
          descr: data.weather[0].main,
          icon: data.weather[0].icon
        };

        UI_ELEMENTS.TEMP.textContent = weatherInSity.temp;
        UI_ELEMENTS.SITY_NAME.textContent = weatherInSity.cityName;
        UI_ELEMENTS.WEATHER_ICON.src = `http://openweathermap.org/img/wn/${weatherInSity.icon}@2x.png`;

        resolve(weatherInSity);
      });
    })
    .catch(error => {
      alert(error.message);
    });
}

function getUrl(param) {
  return `${API.SERVER_URL}?q=${param}&units=metric&appid=${API.KEY}`;
}


UI_ELEMENTS.TAB_BUTTONS.forEach( tabBtn => {

  tabBtn.addEventListener('click', function () {
    UI_ELEMENTS.TAB_BUTTONS.forEach( el => el.classList.remove('active') );

    this.classList.add('active');

    const attrTabBtn = this.dataset.tab;

    UI_ELEMENTS.CONTENT_ITEMS.forEach( tabItem => {
      tabItem.classList.remove('active');

      if ( tabItem.classList.contains(attrTabBtn) ) {
        tabItem.classList.add('active');
      }
    });
  });

});
