import { AppRoutes } from '~/shared/config/route-config/route-config.js';
import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';
import { Link } from '~/shared/ui/ui.js';

import styles from './menu.module.scss';

type MenuProperties = {
  className?: string;
};

const Menu: FC<MenuProperties> = ({ className }) => {
  return (
    <nav className={classNames(styles.navigation, className)}>
      <ul className={styles.menu}>
        {Object.entries(AppRoutes).map(([title, route]) => {
          if (title === 'HOME') {
            return;
          }
          return (
            <Link key={route} to={route}>
              <li className={styles.menu_item}>{title.toLowerCase()}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export { Menu };
