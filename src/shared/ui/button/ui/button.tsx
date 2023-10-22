import { type ButtonHTMLAttributes } from 'react';

import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';

import { type ButtonType, ButtonVariant } from '../model/model.js';
import styles from './button.module.scss';

type ButtonProperties = {
  variant?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProperties> = ({
  children,
  className,
  variant = ButtonVariant.FILLED,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(styles.button, styles[variant], className)}
    >
      {children}
    </button>
  );
};

export { Button };
