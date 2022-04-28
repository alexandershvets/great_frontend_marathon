
class Storage {
  getCurrentCity() {
    return localStorage.getItem('currentCity');
  }
  
  setCurrentCity(cityName) {
    localStorage.setItem('currentCity', cityName);
  }
  
  getFavoriteList() {
    return JSON.parse( localStorage.getItem('favoriteList') );
  }
  
  setFavoriteList(favoriteList) {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
  }
}

export default Storage;