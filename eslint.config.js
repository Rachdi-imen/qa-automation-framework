const eslintPluginPlaywright = require('eslint-plugin-playwright');

module.exports = [
  {
    ignores: [
      'node_modules/',
      'playwright-report/',
      'test-results/',
      'allure-results/',
      'allure-report/',
    ],
  },

  {
    files: ['**/*.ts'],
    plugins: {
      playwright: eslintPluginPlaywright,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'playwright/no-skipped-test': 'warn',
      'playwright/no-focused-test': 'error',
    },
  },
];