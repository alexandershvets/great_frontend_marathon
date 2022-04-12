import Location from '../location/Location';

import './locations.scss';

function Locations() {
  return (
    <div className="weather__locations locations-weather">
      <div className="locations-weather__header">
        <h3 className="locations-weather__title">Added Locations:</h3>
      </div>

      <ul className="locations-weather__list">
        <Location />
        <Location />
        <Location />
      </ul>
    </div>
  );
}

export default Locations;