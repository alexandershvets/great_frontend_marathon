function saveFavoriteCities(favoriteCities) {
  localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
}

function getFavoriteCities() {
  return JSON.parse( localStorage.getItem('favoriteCities') ) || [];
}

function saveCurrentCity(cityName) {
  localStorage.setItem('currentCity', cityName);
}

function getCurrentCity() {
  return localStorage.getItem('currentCity');
}

export { saveFavoriteCities, getFavoriteCities, saveCurrentCity, getCurrentCity};