
/////////////////////////////////////////////////
// weather

export function fetchWeather(request, cityName) {
  return (dispatch) => {
    dispatch( weatherFetching() );
    
    request(cityName)
      .then(weather => dispatch(weatherFetched(weather)))
      .catch(() => dispatch( weatherFetchingError() ));
  };
}

export function weatherFetching() {
  return {
    type: 'WEATHER_FETCHING'
  };
}

export function weatherFetched(weather) {
  return {
    type: 'WEATHER_FETCHED',
    payload: weather
  };
}

export function weatherFetchingError() {
  return {
    type: 'WEATHER_FETCHING_ERROR'
  };
}

export function weatherChangeCurrentCity(cityName) {
  return {
    type: 'WEATHER_CHANGE_CURRENT_CITY',
    payload: cityName
  }
}

/////////////////////////////////////////////////
// forecast

// Комплексный `Create Action`
export function fetchForecast(request, cityName) {
  return (dispatch) => {
    dispatch( forecastFetching() );
    
    request(cityName)
      .then(forecast => dispatch( forecastFetched(forecast) ))
      .catch(() => dispatch( forecastFetchingError() ));
  };
}

export function forecastFetching() {
  return {
    type: 'FORECAST_FETCHING'
  };
}

export function forecastFetched(forecast) {
  return {
    type: 'FORECAST_FETCHED',
    payload: forecast
  };
}

export function forecastFetchingError() {
  return {
    type: 'FORECAST_FETCHING_ERROR'
  };
}

/////////////////////////////////////////////////
// favorite

export function favoriteAddCity(cityName) {
  return {
    type: 'FAVORITE_ADD_CITY',
    payload: cityName
  };
}

export function favoriteRemoveCity(cityName) {
  return {
    type: 'FAVORITE_REMOVE_CITY',
    payload: cityName
  };
}