module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: false,
    es2020: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    semi: ['error', 'never'],
    'no-var': ['error'],
    'no-console': ['off'],
    'no-unused-vars': ['warn'],
    'no-mixed-spaces-and-tabs': ['warn'],
    'node/no-unpublished-require': ['off'],
  },
}
