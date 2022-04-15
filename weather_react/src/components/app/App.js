import { createContext, useState, useEffect, useMemo } from 'react';

import Container from '../container/Container';
import Search from '../search/Serach';
import Info from '../Info/Info';
import Locations from '../locations/Locations';
import Storage from '../../storage/Storage';

import './app.scss';

export const FavoriteCityContext = createContext();
export const IsLikeContext = createContext(false);

const storage = new Storage();
const currentCity = storage.getCurrentCity() || 'Cape Town';
const favoriteCitysList = storage.getFavoriteList() || [];

function App() {
  const [cityName, setCityName] = useState(currentCity);
  const [favoriteList, setFavoriteList] = useState(favoriteCitysList);
  const [isLike, setLike] = useState(false);

  useEffect(() => {
    favoriteList.includes(cityName) ? setLike(true) : setLike(false);
    
    storage.setCurrentCity(cityName);
    storage.setFavoriteList(favoriteList);
  }, [cityName, favoriteList]);

  const onAddCityName = (cityName) => {
    if (!cityName.length) return;

    setCityName(cityName)
  };

  const onAddCityInFavorites = (cityName) => {
    if ( favoriteList.includes(cityName) ) return;
    
    setFavoriteList(favoriteList => [...favoriteList, cityName]);
    setLike(true);
  };

  const actionsFavoriteCity = useMemo(() => ({
    onDeleteCity: cityName => setFavoriteList(favoriteList => favoriteList.filter(item => item !== cityName)),
    onChangeCityName: cityName => setCityName(cityName)
  }), []);

  return (
    <Container>
      <div className="weather">
        <Search onAddCityName={onAddCityName} />
        <div className="weather__body">
          <IsLikeContext.Provider value={isLike} >
            <Info
              cityName={cityName}
              onAddCityInFavorites={onAddCityInFavorites}
            />
          </IsLikeContext.Provider>
          <FavoriteCityContext.Provider value={actionsFavoriteCity} >
            <Locations favoriteList={favoriteList} />
          </FavoriteCityContext.Provider>
        </div>
      </div>
    </Container>
  );
}

export default App;
