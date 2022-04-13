import { Routes, Route } from 'react-router-dom';

import NowInfo from '../nowInfo/NowInfo';
import DetailsInfo from '../detailsInfo/DetailsInfo';
import ForecastInfo from '../forecastInfo/ForecastInfo';
import Actions from '../actions/Actions';

import './info.scss';

function Info() {
  return (
    <div className="weather__info info-weather">
        <div className="info-weather__body">
          <Routes>
            <Route path="now" element={<NowInfo />} />
            <Route path="details" element={<DetailsInfo />} />
            <Route path="forecast" element={<ForecastInfo />} />
            <Route path="*" element={<NowInfo />} />
          </Routes>
        </div>
        <Actions />
    </div>
  );
}

export default Info;