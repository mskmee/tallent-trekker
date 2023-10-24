import {
  ArticlesPage,
  ContactsPage,
  HomePage,
  StatisticPage,
} from '~/pages/pages.js';
import {
  AppRoutes,
  RoutePath,
} from '~/shared/config/route-config/route-config.js';

import { type RouterConfig } from './types/router-config.type.js';

const routerConfig: RouterConfig = {
  [AppRoutes.HOME]: {
    path: RoutePath['/'],
    element: <HomePage />,
  },
  [AppRoutes.CONTACTS]: {
    path: RoutePath.contacts,
    element: <ContactsPage />,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
  },
  [AppRoutes.STATISTICS]: {
    path: RoutePath.statistics,
    element: <StatisticPage />,
  },
};

export { routerConfig };
