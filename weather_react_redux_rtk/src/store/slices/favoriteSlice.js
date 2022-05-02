import { createSlice } from '@reduxjs/toolkit';

import { getFavoriteList } from '../../services/storage';

const initialState = {
  favoriteList: getFavoriteList() || ['Cape Town', 'Sochi', 'Kirov', 'Darovskoy']
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  reducers: {
    favoriteAddCity: (state, action) => {
      state.favoriteList.unshift(action.payload);
    },
    favoriteRemoveCity: (state, action) => {
      state.favoriteList = state.favoriteList.filter(city => city !== action.payload);
    }
  }
});

const { actions, reducer } = favoriteSlice;

export default reducer;

export const {
  favoriteAddCity,
  favoriteRemoveCity
} = actions;