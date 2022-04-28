import Storage from '../services/Storage';

const DEFAULT_FAVORITE_LIST = ['Cape Town', 'Sochi', 'Kirov', 'Darovskoy'];

const initialState = {
  favoriteList: new Storage().getFavoriteList() || DEFAULT_FAVORITE_LIST
};

function favorite(state = initialState, action) {
  switch (action.type) {
    case 'FAVORITE_ADD_CITY':
      return {
        ...state,
        favoriteList: [action.payload, ...state.favoriteList]
      }
    case 'FAVORITE_REMOVE_CITY':
      return {
        ...state,
        favoriteList: state.favoriteList.filter(city => city !== action.payload)
      }
    default: return state;
  }
}

export default favorite;