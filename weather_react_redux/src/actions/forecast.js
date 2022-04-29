import { actionCreator } from '../utils/actionCreator';

export const FORECAST_FETCHING = 'FORECAST_FETCHING';
export const FORECAST_FETCHED = 'FORECAST_FETCHED';
export const FORECAST_FETCHING_ERROR = 'FORECAST_FETCHING_ERROR';

// комплексный action creator (санки)
export function fetchForecast(request, cityName) {
  return (dispatch) => {
    dispatch( forecastFetching() );
    
    request(cityName)
      .then(forecast => dispatch( forecastFetched(forecast) ))
      .catch(() => dispatch( forecastFetchingError() ));
  };
}

// action creators
export const forecastFetching = actionCreator(FORECAST_FETCHING);
export const forecastFetched = actionCreator(FORECAST_FETCHED);
export const forecastFetchingError = actionCreator(FORECAST_FETCHING_ERROR);