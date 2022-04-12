import './detailsInfo.scss';

function DetailsInfo() {
  return (
    <div className="info-weather__item details-info-weather">
      <div className="details-info-weather__town">Cape Town</div>
      <ul className="details-info-weather__params">
        <li className="details-info-weather__param">
          <span className="details-info-weather__param-name">Temperature:</span>
          <span className="details-info-weather__param-value _deg">17</span>
        </li>
        <li className="details-info-weather__param">
          <span className="details-info-weather__param-name">Feels like:</span>
          <span className="details-info-weather__param-value _deg">17</span>
        </li>
        <li className="details-info-weather__param">
          <span className="details-info-weather__param-name">Weather:</span>
          <span className="details-info-weather__param-value">Clouds</span>
        </li>
        <li className="details-info-weather__param">
          <span className="details-info-weather__param-name">Sunrise:</span>
          <span className="details-info-weather__param-value">8:06</span>
        </li>
        <li className="details-info-weather__param">
          <span className="details-info-weather__param-name">Sunset:</span>
          <span className="details-info-weather__param-value">19:27</span>
        </li>
      </ul>
    </div>
  );
}

export default DetailsInfo;