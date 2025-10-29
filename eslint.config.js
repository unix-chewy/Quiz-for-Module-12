module.exports = [
    {
        files: ["*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module"
        },
        rules: {
            "semi": ["error", "always"],
            "no-unused-vars": "warn",
            "no-console": "warn",
            "indent": ["error", 4],
            "quotes": ["error", "single"],
            "comma-dangle": ["error", "never"]
        }
    }
];