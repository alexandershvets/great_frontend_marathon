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

  TAB: document.querySelector('.tab')
};

export function tabInit(tab) {
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
