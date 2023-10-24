import { AppRoutes } from '~/shared/config/route-config/route-config.js';
import { classNames } from '~/shared/lib/helpers/helpers.js';
import { useId } from '~/shared/lib/hooks/hooks.js';
import { type FC } from '~/shared/types/types.js';
import { Button, ButtonVariant, Link } from '~/shared/ui/ui.js';

import styles from './menu.module.scss';

type MenuProperties = {
  className?: string;
};

const Menu: FC<MenuProperties> = ({ className }) => {
  const burgerId = useId();
  return (
    <>
      <input className={styles.toggle} id={burgerId} type="checkbox" />
      <label className={styles.button} htmlFor={burgerId}>
        <span></span>
      </label>
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
      <div className={classNames(styles.user_wrapper, className)}>
        <Button variant={ButtonVariant.OUTLINE}>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </>
  );
};

export { Menu };
