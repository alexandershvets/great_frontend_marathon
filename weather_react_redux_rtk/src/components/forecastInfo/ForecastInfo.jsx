import { useWeather } from '../../hooks/weather.hook';
import { setContent } from '../../utils/setContent';

import ForecastItem from '../forecastItem/ForecastItem';

import './forecastInfo.scss';

function ForecastInfo() {
  const { currentCity, forecastLoadingStatus, forecast } = useWeather('forecast');
  
  return (
    <div className="info-weather__item forecast-info-weather">
      {setContent(forecastLoadingStatus, View, forecast, currentCity)}
    </div>
  );
}

function View({ data }) {
  const forecastList = data;
  const currentCity = data[0].city;

  const forecastRender = arr => {
    const forecastList = arr.map((item, i) => (
      <ForecastItem key={i} {...item} />
    ));
    
    return (
      <ul className="forecast-info-weather__list">
        {forecastList}
      </ul>
    );
  };

  return (
    <>
      <div className="forecast-info-weather__town">{currentCity}</div>
      {forecastRender(forecastList)}
    </>
  );
}

export default ForecastInfo;