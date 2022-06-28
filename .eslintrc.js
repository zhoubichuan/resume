module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-console': 'off',
    'no-debugger': 'off',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],

  'extends': [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ]
};
