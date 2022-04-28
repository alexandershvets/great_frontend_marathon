import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import weather from '../reducers/weather';
import forecast from '../reducers/forecast';
import favorite from '../reducers/favorite';

const store = createStore(
  combineReducers({ weather, forecast, favorite }),
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;