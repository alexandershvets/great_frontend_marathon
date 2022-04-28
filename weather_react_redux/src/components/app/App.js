import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { weatherChangeCurrentCity } from '../../actions';

import Storage from '../../services/Storage';

import Search from '../search/Serach';
import Info from '../Info/Info';
import Locations from '../locations/Locations';

import './app.scss';

function App() {
  const { currentCity } = useSelector(state => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    new Storage().setCurrentCity(currentCity);
  }, [currentCity]);

  const onChangeCity = cityName => {
    dispatch( weatherChangeCurrentCity(cityName) );
  };

  return (
    <div className="container">
      <div className="weather">
        <Search onChangeCity={onChangeCity} />
        <div className="weather__body">
          <Info />
          <Locations />
        </div>
      </div>
    </div>
  );
}

export default App;
