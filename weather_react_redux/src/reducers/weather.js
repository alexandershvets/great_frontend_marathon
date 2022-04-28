import Storage from '../services/Storage';

const DEFAULT_CITY = 'Cape Town';

const initialState = {
  currentCity: new Storage().getCurrentCity() || DEFAULT_CITY,
  weather: {},
  weatherLoadingStatus: 'idle',
};

function weather(state = initialState, action) {
  switch (action.type) {
    case 'WEATHER_FETCHING':
      return {
        ...state,
        weatherLoadingStatus: 'loading'
      };
    case 'WEATHER_FETCHED':
      return {
        ...state,
        weather: action.payload,
        weatherLoadingStatus: 'completed'
      };
    case 'WEATHER_FETCHING_ERROR':
      return {
        ...state,
        weatherLoadingStatus: 'error'
      };
    case 'WEATHER_CHANGE_CURRENT_CITY':
      return {
        ...state,
        currentCity: action.payload
      };
    default: return state;
  }
}

export default weather;