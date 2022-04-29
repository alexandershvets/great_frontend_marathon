import {
  FAVORITE_ADD_CITY,
  FAVORITE_REMOVE_CITY
} from '../actions/favorite';
import { getFavoriteList } from '../services/storage';

const DEFAULT_FAVORITE_LIST = ['Cape Town', 'Sochi', 'Kirov', 'Darovskoy'];

const initialState = {
  favoriteList: getFavoriteList() || DEFAULT_FAVORITE_LIST
};

function favorite(state = initialState, action) {
  switch (action.type) {
    case FAVORITE_ADD_CITY:
      return {
        ...state,
        favoriteList: [action.payload, ...state.favoriteList]
      }
    case FAVORITE_REMOVE_CITY:
      return {
        ...state,
        favoriteList: state.favoriteList.filter(city => city !== action.payload)
      }
    default: return state;
  }
}

export default favorite;