import './styles/index.scss';

import { Suspense } from 'react';

import { Router } from '~/app/providers/router/router.js';
import { useLanguage } from '~/shared/lib/hooks/hooks.js';
import { type FC } from '~/shared/types/types.js';

//TODO: add fallback loader component

const App: FC = () => {
  useLanguage();
  return (
    <Suspense fallback={<h1>Loader</h1>}>
      <Router />
    </Suspense>
  );
};

export { App };
