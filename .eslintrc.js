module.exports = {
  root: true,
  env: {
    node: true
  },
  presets: ["env"],
  plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-class-properties"],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}