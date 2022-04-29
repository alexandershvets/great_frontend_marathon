import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { weatherChangeCurrentCity } from '../../actions/weather';
import { getWeather } from '../../selectors/selectors';
import { setCurrentCity } from '../../services/storage';

import Search from '../search/Serach';
import Info from '../Info/Info';
import Locations from '../locations/Locations';

import './app.scss';

function App() {
  const { currentCity } = useSelector(getWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentCity(currentCity);
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
