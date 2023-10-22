import { type ValueOf } from '~/shared/types/types.js';

import { type ButtonVariant } from '../model.js';

type ButtonType = ValueOf<typeof ButtonVariant>;

export { type ButtonType };
