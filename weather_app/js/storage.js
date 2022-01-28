export const storage = {
  saveFavoriteCities(favoriteCities) {
    localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
  },

  getFavoriteCities() {
    return JSON.parse( localStorage.getItem('favoriteCities') );
  },

  saveCurrentCity(currentCity) {
    localStorage.setItem('currentCity', currentCity);
  },

  getCurrentCity() {
    return localStorage.getItem('currentCity');
  }
};