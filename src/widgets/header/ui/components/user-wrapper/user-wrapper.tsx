import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';
import { Button, ButtonVariant } from '~/shared/ui/ui.js';

import styles from './user-wrapper.module.scss';

type UserWrapperProperties = {
  className?: string;
};

const UserWrapper: FC<UserWrapperProperties> = ({ className }) => {
  return (
    <div className={classNames(styles.user_wrapper, className)}>
      <Button variant={ButtonVariant.OUTLINE}>Sign In</Button>
      <Button>Sign Up</Button>
    </div>
  );
};

export { UserWrapper };
