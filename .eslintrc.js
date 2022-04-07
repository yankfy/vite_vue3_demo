module.exports = {
    extends: [
        "plugin:vue/vue3-recommended",
        "prettier",
        // "prettier/vue",
    ],
    rules: {
        'vue/no-unused-vars': 'error',
        'vue/no-multiple-template-root': 'off',
        "no-unused-expressions": "off",
        "vue/require-default-prop": "off",
    },
    // 'parser': '@typescript-eslint/parser',
    // 'parserOptions': {
    //     'parser': 'babel-eslint',
    // },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser"
    }

}
