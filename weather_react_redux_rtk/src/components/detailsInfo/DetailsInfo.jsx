import { useWeather } from '../../hooks/weather.hook';
import { setContent } from '../../utils/setContent';

import './detailsInfo.scss';

function DetailsInfo() {
  const { weatherLoadingStatus, weather } = useWeather('weather');
  
  return (
    <div className="info-weather__item details-info-weather">
      {setContent(weatherLoadingStatus, View, weather)}
    </div>
  );
}

function View({ data }) {
  const {
    city,
    temp,
    feelsLike,
    descr,
    sunrise,
    sunset
  } = data;

  const params = [
    { title: 'Temperature', param: temp, type: 'deg' },
    { title: 'Feels like', param: feelsLike, type: 'deg' },
    { title: 'Weather', param: descr, type: null },
    { title: 'Sunrise', param: sunrise, type: null },
    { title: 'Sunset', param: sunset, type: null },
  ];

  const _params = params.map(({ title, param, type }, i) => (
    <li key={i} className="details-info-weather__param">
      <span className="details-info-weather__param-name">{title}:</span>
      <span className={`details-info-weather__param-value ${type === 'deg' ? '_deg' : null}`}>{param}</span>
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