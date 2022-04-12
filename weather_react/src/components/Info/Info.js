// import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import NowInfo from '../NowInfo/NowInfo';
import DetailsInfo from '../DetailsInfo/DetailsInfo';
import ForecastInfo from '../ForecastInfo/ForecastInfo';
import Actions from '../actions/Actions';

import './info.scss';

// const InfoNow = lazy(() => import('../infoNow/InfoNow'));
// const InfoDetails = lazy(() => import('../InfoDetails/InfoDetails'));
// const InfoForecast = lazy(() => import('../InfoForecast/InfoForecast'));

function Info() {
  return (
    <div className="weather__info info-weather">
      <Router>
        <div className="info-weather__body">
          {/* <Suspense fallback={<Spinner />}> */}
            <Routes>
              <Route path="now" element={<NowInfo />} />
              <Route path="details" element={<DetailsInfo />} />
              <Route path="forecast" element={<ForecastInfo />} />
              <Route path="*" element={<NowInfo />} />
            </Routes>
          {/* </Suspense> */}
        </div>
        <Actions />
      </Router>
    </div>
  );
}

export default Info;