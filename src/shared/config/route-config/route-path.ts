import { AppRoutes, type RoutePaths } from './model/model.js';

const RoutePath: RoutePaths = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.CONTACTS]: '/contacts',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.STATISTICS]: '/statistics',
};

export { RoutePath };
