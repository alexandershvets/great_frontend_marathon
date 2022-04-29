import {
  FORECAST_FETCHING,
  FORECAST_FETCHED,
  FORECAST_FETCHING_ERROR
} from '../actions/forecast';

const initialState = {
  forecast: [],
  forecastLoadingStatus: 'idle'
};

function forecast(state = initialState, action) {
  switch (action.type) {
    case FORECAST_FETCHING:
      return {
        ...state,
        forecastLoadingStatus: 'loading'
      };
    case FORECAST_FETCHED:
      return {
        ...state,
        forecast: action.payload,
        forecastLoadingStatus: 'completed'
      };
    case FORECAST_FETCHING_ERROR:
      return {
        ...state,
        forecastLoadingStatus: 'error'
      };
    default: return state;
  }
}

export default forecast;