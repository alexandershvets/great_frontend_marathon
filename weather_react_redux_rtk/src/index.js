import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/App';
import store from './store';

import './style/main.scss';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={store} >
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
  );