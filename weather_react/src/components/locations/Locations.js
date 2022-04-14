import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Location from '../location/Location';

import './locations.scss';

function Locations({ favoriteList, onDeleteCity, onChangeCityName }) {
  function renderFavoriteList(arr) {
    const favoriteList = arr.map(city => (
      <Location
        key={nanoid(5)}
        cityName={city}
        onDeleteCity={onDeleteCity}
        onChangeCityName={onChangeCityName}
      />
    ));

    return (
      <ul className="locations-weather__list">
        {favoriteList}
      </ul>
    );
  }
  
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