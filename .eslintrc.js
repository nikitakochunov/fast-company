module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
}
