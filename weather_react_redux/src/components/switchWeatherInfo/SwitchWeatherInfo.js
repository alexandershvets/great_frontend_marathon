import { NavLink } from 'react-router-dom';

import './actions.scss';

function SwitchWeatherInfo() {
  return (
    <div className="info-weather__actions actions-info-weather">
      <NavLink to="/" className="actions-info-weather__btn">Now</NavLink>
      <NavLink to="details" className="actions-info-weather__btn">Details</NavLink>
      <NavLink to="forecast" className="actions-info-weather__btn">Forecast</NavLink>
    </div>
  );
}

export default SwitchWeatherInfo;