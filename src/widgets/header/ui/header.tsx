import { type FC } from '~/shared/types/types.js';

import { Logo, Menu, UserWrapper } from './components/components.js';
import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header_container}>
      <Logo className={styles.logo_wrapper} />
      <Menu />
      <UserWrapper className={styles.user_wrapper} />
    </header>
  );
};

export { Header };
