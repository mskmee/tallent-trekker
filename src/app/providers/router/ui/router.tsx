import { Route, Routes } from 'react-router-dom';

import { type FC } from '~/shared/types/types.js';

import { routerConfig } from '../model/router-config.js';

const Router: FC = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map((route) => (
        <Route
          key={route.path}
          {...route}
          element={<div className="page-wrapper">{route.element}</div>}
        />
      ))}
    </Routes>
  );
};

export { Router };
