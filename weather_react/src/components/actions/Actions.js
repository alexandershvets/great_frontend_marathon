import { NavLink } from 'react-router-dom';

import './actions.scss';

function getClass({ isActive }) {
  const clazz = 'actions-info-weather__btn';
  return isActive ? `${clazz} active` : clazz;
}

function Actions() {
  return (
    <div className="info-weather__actions actions-info-weather">
      <NavLink to="/now" className={getClass}>Now</NavLink>
      <NavLink to="/details" className={getClass}>Details</NavLink>
      <NavLink to="/forecast" className={getClass}>Forecast</NavLink>
    </div>
  );
}

export default Actions;