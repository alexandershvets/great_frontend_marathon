import { useState, useEffect } from 'react';
import { useWeather } from '../../hooks/weather.hook';
import { useSelector, useDispatch } from 'react-redux';
import { favoriteAddCity } from '../../actions/favorite'
import { setFavoriteList } from '../../services/storage';
import { getFavorite } from '../../selectors/selectors';
import { setContent } from '../../utils/setContent';

import './nowInfo.scss';

function NowInfo() {
  const { weatherLoadingStatus, weather } = useWeather('weather');

  return (
    <div className="info-weather__item now-info-weather">
      {setContent(weatherLoadingStatus, View, weather)}
    </div>
  );
}

function View({ data: { temp, icon, city } }) {
  const { favoriteList } = useSelector(getFavorite);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    favoriteList.includes(city) ? setIsFavorite(true) : setIsFavorite(false);
  }, [city, favoriteList]);

  useEffect(() => {
    setFavoriteList(favoriteList);
  }, [favoriteList]);
  
  const onAddCity = () => {
    if ( favoriteList.includes(city) ) return;

    dispatch( favoriteAddCity(city) );
    setIsFavorite(true);
  };
  
  return (
    <>
      <div className="now-info-weather__temperature _deg">{temp}</div>
      <div className="now-info-weather__icon">
        <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="Icon Weather" />
      </div>
      <div className="now-info-weather__info">
        <div className="now-info-weather__town">{city}</div>
        <button
          type="button"
          className={`now-info-weather__like ${isFavorite ? 'active' : null}`}
          onClick={onAddCity}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8398 2.39496C13.013 -0.169205 10.2871 2.03882 9.27755 3.46336C8.26797 2.03882 5.54163 -0.169205 2.71481 2.39496C-0.112011 4.95912 1.87349 8.80536 3.2196 10.408C4.22918 11.6544 6.85456 14.361  9.27755 15.2158C11.7005 14.361 14.3254 11.6544 15.335 10.408C16.6811 8.80536 18.6666 4.95912 15.8398 2.39496Z" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default NowInfo;