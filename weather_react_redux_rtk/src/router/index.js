import NowInfo from '../components/nowInfo/NowInfo';
import DetailsInfo from '../components/detailsInfo/DetailsInfo';
import ForecastInfo from '../components/forecastInfo/ForecastInfo';

const routes = [
  {
    name: 'now',
    path: '/',
    component: NowInfo
  },
  {
    name: 'details',
    path: '/details',
    component: DetailsInfo
  },
  {
    name: 'forecast',
    path: '/hello',
    component: ForecastInfo
  },
  {
    path: '*',
    component: NowInfo
  },
];

const routesMap = {};

routes.forEach(route => {
  if (route.hasOwnProperty('name')) {
    routesMap[route.name] = route.path;
  }
});
/*
{
  details: "/details",
  forecast: "/forecast",
  now: "*"
}
*/

/*
  По хорошему, когда формируем ссылки, `routes` мы пользоваться не должны
  В идеале мы должны пользоваться только `routesMap`
*/
export { routes, routesMap };