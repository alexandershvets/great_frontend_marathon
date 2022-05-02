// import { createAction } from '@reduxjs/toolkit';

// export const FORECAST_FETCHING = 'FORECAST_FETCHING';
// export const FORECAST_FETCHED = 'FORECAST_FETCHED';
// export const FORECAST_FETCHING_ERROR = 'FORECAST_FETCHING_ERROR';

// // комплексный action creator (санки)
// export function fetchForecast(request, cityName) {
//   return (dispatch) => {
//     dispatch( forecastFetching() );
    
//     request(cityName)
//       .then(forecast => dispatch( forecastFetched(forecast) ))
//       .catch(() => dispatch( forecastFetchingError() ));
//   };
// }

// // action creators
// export const forecastFetching = createAction(FORECAST_FETCHING);
// export const forecastFetched = createAction(FORECAST_FETCHED);
// export const forecastFetchingError = createAction(FORECAST_FETCHING_ERROR);