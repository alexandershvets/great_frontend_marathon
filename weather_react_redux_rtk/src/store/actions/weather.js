// import { createAction } from '@reduxjs/toolkit';

// export const WEATHER_FETCHING = 'WEATHER_FETCHING';
// export const WEATHER_FETCHED = 'WEATHER_FETCHED';
// export const WEATHER_FETCHING_ERROR = 'WEATHER_FETCHING_ERROR';
// export const WEATHER_CHANGE_CURRENT_CITY = 'WEATHER_CHANGE_CURRENT_CITY';

// // комплексный action creator (санки)
// export function fetchWeather(request, cityName) {
//   return (dispatch) => {
//     dispatch( weatherFetching() );
    
//     request(cityName)
//       .then(weather => dispatch( weatherFetched(weather) ))
//       .catch(() => dispatch( weatherFetchingError() ));
//   };
// }

// // action creators
// export const weatherFetching = createAction(WEATHER_FETCHING);
// export const weatherFetched = createAction(WEATHER_FETCHED);
// export const weatherFetchingError = createAction(WEATHER_FETCHING_ERROR);
// export const weatherChangeCurrentCity = createAction(WEATHER_CHANGE_CURRENT_CITY);