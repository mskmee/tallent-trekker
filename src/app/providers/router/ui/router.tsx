import { Route, Routes } from 'react-router-dom';

import { type FC } from '~/shared/types/types.js';
import { Header } from '~/widgets/header/header.js';

import { routerConfig } from '../model/router-config.js';

const Router: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        {Object.values(routerConfig).map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </>
  );
};

export { Router };
