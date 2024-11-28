import baseLinter from '@antfu/eslint-config';
import { CommonRules } from './rules/common';

const linter: typeof baseLinter = (options, ...userConfig) => {
  return baseLinter({
    typescript: true,
    yaml: false,
    rules: {
      ...CommonRules,
    },
    ...options
  }, ...userConfig);
};

export default linter;
