import { ContactsPage, HomePage } from '~/pages/pages.js';
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
};

export { routerConfig };
