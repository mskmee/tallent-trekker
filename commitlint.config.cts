import { UserConfig } from '@commitlint/types';

const APP = 'tt';
const ENVIRONMENTS = ['development', 'production'];

const COMMIT_MODIFIERS = ['+', '*', '-'];
const COMMIT_MESSAGE_REGEXP = new RegExp(
  `^(((${APP})-[0-9]{1,6})|(${ENVIRONMENTS.join(
    '|',
  )})): ([${COMMIT_MODIFIERS.join(',')}]) (.*\\S)$`,
);
const COMMIT_MESSAGE_MATCH_RULE_MESSAGE = `commit message doesn't match format requirements
Commit message must have one of the following formats:
    - <project-prefix>-<issue-number>: <modifier> <description>
    - <environment>: <modifier> <description>
Where:
    - <project-prefix>: ${APP}
    - <modifier>: ${COMMIT_MODIFIERS.join(', ')}
    - <environment>: ${ENVIRONMENTS.join(', ')}
Examples:
    - ${APP}-5: + ui/ux lecture
    - ${ENVIRONMENTS[0]}: - comments in ui/ux homework`;

const configuration: UserConfig = {
  parserPreset: {
    parserOpts: {
      headerPattern: COMMIT_MESSAGE_REGEXP,
      headerCorrespondence: ['prefix', 'modifier', 'description'],
    },
  },
  defaultIgnores: true,
  plugins: [
    {
      rules: {
        'commit-message-match': ({ header }): [true] | [false, string] => {
          if (!COMMIT_MESSAGE_REGEXP.test(header)) {
            return [false, COMMIT_MESSAGE_MATCH_RULE_MESSAGE];
          }

          return [true];
        },
      },
    },
  ],
  rules: {
    'commit-message-match': [2, 'always'],
  },
};

export default configuration;
