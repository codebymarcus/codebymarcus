module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Assets', './src/assets'],
          ['Pages', './src/pages'],
          ['Components', './src/components'],
        ],
      },
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
