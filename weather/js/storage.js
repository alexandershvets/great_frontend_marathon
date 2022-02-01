import Cookies from '../node_modules/js-cookie/dist/js.cookie.mjs';

function saveFavoriteCities(favoriteCities) {
  localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
}

function getFavoriteCities() {
  return JSON.parse( localStorage.getItem('favoriteCities') ) || [];
}

function saveCurrentCity(cityName) {
  // test localstorage
  // localStorage.setItem('currentCity', cityName);

  const inFifteenMinutes = new Date(Date.now() + 60 * 60 * 1000);
  Cookies.set('currentCity', cityName, { expires: inFifteenMinutes, path: '' });
}

function getCurrentCity() {
  // test localstorage
  // return localStorage.getItem('currentCity');

  return Cookies.get('currentCity');
}

export { saveFavoriteCities, getFavoriteCities, saveCurrentCity, getCurrentCity};