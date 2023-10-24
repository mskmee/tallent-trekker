import { type LinkProps } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';

import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';

import styles from './link.module.scss';

const Link: FC<LinkProps> = ({ className, children, ...props }) => {
  return (
    <LinkRouter {...props} className={classNames(styles.link, className)}>
      {children}
    </LinkRouter>
  );
};

export { Link };
