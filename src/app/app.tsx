import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';

import styles from './app.module.scss';

type App = {
  className?: string;
};

const App: FC<App> = ({ className }) => {
  return <div className={classNames(styles.app, className)}>app</div>;
};

export { App };
