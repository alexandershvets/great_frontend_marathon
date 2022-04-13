import { useState, useEffect } from 'react';

import Container from '../container/Container';
import Search from '../search/Serach';
import Info from '../Info/Info';
import Locations from '../locations/Locations';

import './app.scss';

function App() {
  const [cityName, setCityName] = useState('Киров');
  const [favoriteList, setFavoriteList] = useState(['Cape Town', 'Kirov']);

  const onAddCityName = (cityName) => {
    if (!cityName.length) return;

    setCityName(cityName)
  };

  const onAddCityInFavorites = (cityName) => {
    if ( favoriteList.includes(cityName) ) return;

    setFavoriteList(favoriteList => [...favoriteList, cityName]);
  };

  const onDeleteCity = cityName => {
    setFavoriteList(favoriteList => favoriteList.filter(item => item !== cityName));
  };
  
  return (
    <Container>
      <div className="weather">
        <Search onAddCityName={onAddCityName} />
        <div className="weather__body">
          <Info
            cityName={cityName}
            onAddCityInFavorites={onAddCityInFavorites}
          />
          <Locations
            favoriteList={favoriteList}
            onDeleteCity={onDeleteCity}
            onRequest={cityName => setCityName(cityName)}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
