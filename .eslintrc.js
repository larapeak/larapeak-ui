module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      '@vue/typescript/recommended',
      'plugin:vue/vue3-recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }