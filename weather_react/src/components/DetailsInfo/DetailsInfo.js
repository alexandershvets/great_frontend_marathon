import { useState } from 'react';

import useWeather from '../../hooks/weather.hook';

import './detailsInfo.scss';

function DetailsInfo({ cityName }) {
  const { state: weather, spinner, errorMessage, isContent } = useWeather(cityName);

  const content = isContent ? <View {...weather} /> : null;
  
  return (
    <div className="info-weather__item details-info-weather">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

function View({ city, temp, feelsLike, descr, sunrise, sunset }) {
  const [params, setParams] = useState([
    { title: 'Temperature', param: temp, type: 'deg' },
    { title: 'Feels like', param: feelsLike, type: 'deg' },
    { title: 'Weather', param: descr, type: null },
    { title: 'Sunrise', param: sunrise, type: null },
    { title: 'Sunset', param: sunset, type: null },
  ]);

  const _params = params.map(({ title, param, type }, i) => (
    <li key={i} className="details-info-weather__param">
      <span className="details-info-weather__param-name">{title}:</span>
      <span className={`details-info-weather__param-value ${type ? '_deg' : null}`}>{param}</span>
    </li>
  ));

  return (
    <>
      <div className="details-info-weather__town">{city}</div>
      <ul className="details-info-weather__params">
        {_params}
      </ul>
    </>
  );
}

export default DetailsInfo;