module.exports = {
    extends: [
      'eslint-config-airbnb-base',
    ],
    rules: {
      indent: [
        'error',
        2,
      ],
      'linebreak-style': [
        'error',
        'windows',
      ],
      quotes: [
        'error',
        'single',
      ],
      semi: [
        'error',
        'always',
      ],
      '@typescript-eslint/no-var-requires': 0,
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
    noInlineConfig: true,
  };