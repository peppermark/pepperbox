module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-empty-interface': ['error'],
    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      },
    }],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'no-multi-assign': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'semi': ['error', 'never', { 'beforeStatementContinuationChars': 'always' }],
    'semi-style': ['error', 'first'],
    'no-var': ['error'],
  },
}

