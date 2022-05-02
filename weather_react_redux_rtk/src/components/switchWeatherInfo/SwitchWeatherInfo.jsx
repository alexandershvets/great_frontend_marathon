import { NavLink } from 'react-router-dom';
import { routesMap } from '../../router';

import './actions.scss';

function SwitchWeatherInfo() {
  return (
    <div className="info-weather__actions actions-info-weather">
      <NavLink to={routesMap.now} className="actions-info-weather__btn">Now</NavLink>
      <NavLink to={routesMap.details} className="actions-info-weather__btn">Details</NavLink>
      <NavLink to={routesMap.forecast} className="actions-info-weather__btn">Forecast</NavLink>
    </div>
  );
}

export default SwitchWeatherInfo;