import { useContext } from 'react';

import useWeather from '../../hooks/weather.hook';

import './nowInfo.scss';

import { IsLikeContext } from '../app/App';

function NowInfo({ cityName, onAddCityInFavorites }) {
  const { state: weather, spinner, errorMessage, isContent } = useWeather(cityName);
  
  const content = isContent
    ? <View {...weather} onAddCityInFavorites={onAddCityInFavorites} />
    : null;

  return (
    <div className="info-weather__item now-info-weather">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

function View({ temp, icon, city, onAddCityInFavorites }) {
  const isLike = useContext(IsLikeContext);
  
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
          className={`now-info-weather__like ${isLike ? 'active' : null}`}
          onClick={() => onAddCityInFavorites(city)}
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