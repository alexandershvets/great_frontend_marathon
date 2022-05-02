import initialState from '../initialState';
import {
  FAVORITE_ADD_CITY,
  FAVORITE_REMOVE_CITY
} from '../actions/favorite';

function favorite(state = initialState.favorite, action) {
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