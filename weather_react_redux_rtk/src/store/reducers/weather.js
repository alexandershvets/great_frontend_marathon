import initialState from '../initialState';
import {
  WEATHER_FETCHING,
  WEATHER_FETCHED,
  WEATHER_FETCHING_ERROR,
  WEATHER_CHANGE_CURRENT_CITY
} from '../actions/weather';

function weather(state = initialState.weather, action) {
  switch (action.type) {
    case WEATHER_FETCHING:
      return {
        ...state,
        weatherLoadingStatus: 'loading'
      };
    case WEATHER_FETCHED:
      return {
        ...state,
        weather: action.payload,
        weatherLoadingStatus: 'completed'
      };
    case WEATHER_FETCHING_ERROR:
      return {
        ...state,
        weatherLoadingStatus: 'error'
      };
    case WEATHER_CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
    default: return state;
  }
}

export default weather;