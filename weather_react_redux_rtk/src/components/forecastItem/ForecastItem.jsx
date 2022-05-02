import './forecastItem.scss';

function ForecastItem({ date, time, temp, feelsLike, descr, icon }) {
  return (
    <li className="forecast-info-weather__item forecast-info-item">
      <div className="forecast-info-item__top">
        <div className="forecast-info-item__date">{date}</div>
        <div className="forecast-info-item__time">{time}</div>
      </div>
      <div className="forecast-info-item__bottom">
        <div className="forecast-info-item__temp">
          <div className="forecast-info-item__temp-current">
            Temperature: <span className="_deg">{temp}</span>
          </div>
          <div className="forecast-info-item__temp-feels-like">
            Feels like: <span className="_deg">{feelsLike}</span>
          </div>
        </div>
        <div className="forecast-info-item__icon">
          <div className="forecast-info-item__icon-descr">{descr}</div>
          <div className="forecast-info-item__icon-image">
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Icon Weather" />
          </div>
        </div>
      </div>
    </li>
  );
}

export default ForecastItem;