
class Storage {
  setFavoriteList(favoriteList) {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
  }
  
  getFavoriteList() {
    return JSON.parse( localStorage.getItem('favoriteList') );
  }

  setCurrentCity(cityName) {
    localStorage.setItem('currentCity', cityName);
  }

  getCurrentCity() {
    return localStorage.getItem('currentCity');
  }
}

export default Storage;