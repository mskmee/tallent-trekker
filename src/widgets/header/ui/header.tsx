import { type FC } from '~/shared/types/types.js';

import { Logo, Menu } from './components/components.js';
import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header_container}>
      <Logo className={styles.logo_wrapper} />
      <Menu />
    </header>
  );
};

export { Header };
