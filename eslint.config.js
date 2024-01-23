const uni = require('@uni-helper/eslint-config');
const unocss = require('@unocss/eslint-plugin');

module.exports = uni(
  {},
  unocss.configs.flat,
  {
    // style
    rules: {
      'style/quote-props': ['error', 'as-needed'],
      'style/semi': ['error', 'always'],
      'style/max-statements-per-line': ['error', { max: 1 }],
      curly: ['warn', 'all'],
      'style/member-delimiter-style': ['warn', {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
        multilineDetection: 'brackets',
      }],

    },
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
);
