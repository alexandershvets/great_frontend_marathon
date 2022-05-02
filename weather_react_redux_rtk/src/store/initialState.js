import { getCurrentCity, getFavoriteList } from '../services/storage';

const DEFAULT_CITY_NAME = 'Cape Town';
const DEFAULT_FAVORITE_LIST = ['Cape Town', 'Sochi', 'Kirov', 'Darovskoy'];

const initialState = {
  weather: {
    currentCity: getCurrentCity() || DEFAULT_CITY_NAME,
    weather: {},
    weatherLoadingStatus: 'idle',
  },
  forecast: {
    forecast: [],
    forecastLoadingStatus: 'idle'
  },
  favorite: {
    favoriteList: getFavoriteList() || DEFAULT_FAVORITE_LIST
  },
};

export default initialState;