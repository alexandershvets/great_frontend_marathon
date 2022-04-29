
export function getCurrentCity() {
  return localStorage.getItem('currentCity');
}

export function setCurrentCity(cityName) {
  localStorage.setItem('currentCity', cityName);
}

export function getFavoriteList() {
  return JSON.parse( localStorage.getItem('favoriteList') );
}

export function setFavoriteList(favoriteList) {
  localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
}