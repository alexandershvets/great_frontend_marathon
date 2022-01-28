import { UI_ELEMENTS } from './view.js';
import { WEATHER_API } from './data.js';

export function getCityName() {
  return UI_ELEMENTS.SEARCH_INPUT.value.trim();
}

export function getUrl(cityName, whatLook = 'weather', icon = '4n', sizeIcon = '') {
  if (whatLook === 'icons') {
    return `${WEATHER_API.SERVER_ICONS_URL}${icon}${sizeIcon}.png`;
  }

  return `${WEATHER_API.SERVER_URL}${whatLook}?q=${cityName}&units=metric&appid=${WEATHER_API.KEY}`;
}
// console.log( getUrl('Киров') );
// // https://api.openweathermap.org/data/2.5/weather?q=Киров&units=metric&appid=8d205e2f51d2fa2c11b2c460a8bba879
// console.log(getUrl('Киров', 'forecast'));
// // https://api.openweathermap.org/data/2.5/forecast?q=Киров&units=metric&appid=8d205e2f51d2fa2c11b2c460a8bba879
// console.log( getUrl(null, 'icons', '4n', '@4x') );
// // https://openweathermap.org/img/wn/4n@4x.png

export function convertTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  const formattedTime = hours + ':' + minutes.slice(-2);

  return formattedTime;
}

export function convertDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.toLocaleString('en-US', { day: "numeric" });
  const month = date.toLocaleString('en-US', { month: "short" });

  const formattedDate = `${day} ${month}`;

  return formattedDate;
}