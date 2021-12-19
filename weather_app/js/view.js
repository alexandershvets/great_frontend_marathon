export const UI_ELEMENTS = {
  FORMS: document.querySelectorAll('.form'),
  SERACH_INPUT: document.querySelector('.search-form-weather__input'),
  TEMP: document.querySelector('.now-item__temperature'),
  SITY_NAME: document.querySelector('.now-item__town'),
  WEATHER_ICON: document.querySelector('.now-item__icon img'),
  CITIES_LIST: document.querySelector('.locations-form-weather__list'),
  ADD_SITY_BTN: document.querySelector('.now-item__like'),
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
