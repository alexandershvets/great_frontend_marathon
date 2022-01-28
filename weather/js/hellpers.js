import { UI_ELEMENTS } from './view.js';
import { WEATHER_API } from './data.js';

export function getCityName(e) {
  const isListForm = e.target.classList.contains('locations-form-weather');
  return (isListForm) ? e.submitter.textContent : UI_ELEMENTS.SEARCH_INPUT.value.trim();
}

export function getUrl(cityName, whatLook = 'weather', icon = '4n', sizeIcon = '') {
  if (whatLook === 'icons') {
    return `${WEATHER_API.SERVER_ICONS_URL}${icon}${sizeIcon}.png`;
  }

  return `${WEATHER_API.SERVER_URL}${whatLook}?q=${cityName}&units=metric&appid=${WEATHER_API.KEY}`;
}

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