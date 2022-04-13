import useWeather from '../../hooks/weather.hook';

import ForecastItem from '../forecastItem/ForecastItem';

import './forecastInfo.scss';

function ForecastInfo({ cityName }) {
  const { state: forecast, spinner, errorMessage, isContent } = useWeather(cityName, true);

  const content = isContent ? <View forecast={forecast} /> : null;

  return (
    <div className="info-weather__item forecast-info-weather">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

function View({ forecast }) {
  
  function renderForecastList(arr) {
    const forecastList = arr.map((weather, i) => <ForecastItem key={i} {...weather} />);

    return (
      <ul className="forecast-info-weather__list">
        {forecastList}
      </ul>
    );
  }
  
  return (
    <>
      <div className="forecast-info-weather__town">{forecast[0].city}</div>
      {renderForecastList(forecast)}
    </>
  );
};

export default ForecastInfo;