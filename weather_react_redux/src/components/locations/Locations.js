import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import Location from '../location/Location';

import './locations.scss';

function Locations() {
  const { favoriteList } = useSelector(state => state.favorite);

  const renderFavoriteList = arr => {
    const favoriteList = arr.map(city => (
      <Location key={nanoid(4)} cityName={city} />
    ));

    return (
      <ul className="locations-weather__list">
        {favoriteList}
      </ul>
    );
  };

  return (
    <div className="weather__locations locations-weather">
      <div className="locations-weather__header">
        <h3 className="locations-weather__title">Added Locations:</h3>
      </div>
      {renderFavoriteList(favoriteList)}
    </div>
  );
}

export default Locations;