import LogoComponent from '~/shared/assets/logo/logo.svg?react';
import { AppRoutes } from '~/shared/config/route-config/route-config.js';
import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';
import { Link } from '~/shared/ui/link/link.js';

import styles from './logo.module.scss';

type LogoProperties = {
  className?: string;
};

const Logo: FC<LogoProperties> = ({ className }) => {
  return (
    <Link to={AppRoutes.HOME} className={classNames(styles.logo, className)}>
      <LogoComponent />
    </Link>
  );
};

export { Logo };
