import ForecastItem from '../forecastItem/ForecastItem';

import './forecastInfo.scss';

function ForecastInfo() {
  return (
    <div className="info-weather__item forecast-info-weather">
      <div className="forecast-info-weather__town">Cape Town</div>
      <ul className="forecast-info-weather__list">
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </ul>
    </div>
  );
}

export default ForecastInfo;