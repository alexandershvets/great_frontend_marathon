import './forecastItem.scss';

function ForecastItem() {
  return (
    <li className="forecast-info-weather__item forecast-info-item">
      <div className="forecast-info-item__top">
        <div className="forecast-info-item__date">18 Apr</div>
        <div className="forecast-info-item__time">0:00</div>
      </div>
      <div className="forecast-info-item__bottom">
        <div className="forecast-info-item__temp">
          <div className="forecast-info-item__temp-current">
            Temperature: <span className="_deg">17</span>
          </div>
          <div className="forecast-info-item__temp-feels-like">
            Feels like: <span className="_deg">16</span>
          </div>
        </div>
        <div className="forecast-info-item__icon">
          <div className="forecast-info-item__icon-descr">Clear</div>
          <div className="forecast-info-item__icon-image">
            <img src="https://openweathermap.org/img/wn/02n.png" alt="Icon Weather" />
          </div>
        </div>
      </div>
    </li>
  );
}

export default ForecastItem;