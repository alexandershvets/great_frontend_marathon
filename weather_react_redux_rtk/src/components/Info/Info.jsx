import { Routes, Route } from 'react-router-dom';
import { routes } from '../../router';

import SwitchWeatherInfo from '../switchWeatherInfo/SwitchWeatherInfo';

import './info.scss';

function Info() {
  const routesComponents = routes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  return (
    <div className="weather__info info-weather">
        <div className="info-weather__body">
          <Routes>
            {routesComponents}
          </Routes>
        </div>
        <SwitchWeatherInfo />
    </div>
  );
}

export default Info;