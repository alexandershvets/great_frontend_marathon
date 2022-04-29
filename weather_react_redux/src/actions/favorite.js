import { actionCreator } from '../utils/actionCreator';

export const FAVORITE_ADD_CITY = 'FAVORITE_ADD_CITY';
export const FAVORITE_REMOVE_CITY = 'FAVORITE_REMOVE_CITY';

// action creators
export const favoriteAddCity = actionCreator(FAVORITE_ADD_CITY);
export const favoriteRemoveCity = actionCreator(FAVORITE_REMOVE_CITY);