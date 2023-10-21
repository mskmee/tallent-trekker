import './styles/index.scss';

import { Router } from '~/app/providers/router/router.js';
import { type FC } from '~/shared/types/types.js';

const App: FC = () => {
  return <Router />;
};

export { App };
