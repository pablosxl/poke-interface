module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/base", "plugin:vue/essential", "plugin:vue/strongly-recommended"],
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/no-parsing-error": [2, { "invalid-first-character-of-tag-name": false }],
        "vue/attribute-hyphenation": "off",
        "vue/script-indent": ["error", 4],
        "no-console": "off",
        "no-debugger": "off"
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};
