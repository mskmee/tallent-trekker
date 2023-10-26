import { AppRoutes } from '~/shared/config/route-config/route-config.js';
import { useId, useTranslation } from '~/shared/lib/hooks/hooks.js';
import { type FC } from '~/shared/types/types.js';
import { Button, ButtonVariant, Link } from '~/shared/ui/ui.js';

import styles from './menu.module.scss';

const Menu: FC = () => {
  const burgerId = useId();
  const { t } = useTranslation();
  return (
    <>
      <input className={styles.toggle} id={burgerId} type="checkbox" />
      <label className={styles.button} htmlFor={burgerId}>
        <span></span>
      </label>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          {Object.entries(AppRoutes).map(([title, route]) => {
            if (title === 'HOME') {
              return;
            }
            return (
              <Link key={route} to={route}>
                <li className={styles.menu_item}>{t(title)}</li>
              </Link>
            );
          })}
          <li className={styles.mobile_auth}>
            <Button
              className={styles.mobile_button}
              variant={ButtonVariant.OUTLINE}
            >
              {t('LOGIN')}
            </Button>
            <Button className={styles.mobile_button}>
              {t('REGISTRATION')}
            </Button>
          </li>
        </ul>
      </nav>
      <div className={styles.auth_wrapper}>
        <Button variant={ButtonVariant.OUTLINE}>{t('LOGIN')}</Button>
        <Button>{t('REGISTRATION')}</Button>
      </div>
    </>
  );
};

//TODO: create auth component and add language change block

export { Menu };
