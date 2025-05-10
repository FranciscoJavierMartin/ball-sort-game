/** @type {import('stylelint').Config} */
export default {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-alphabetical-order',
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'prettier/prettier': true,
  },
};
