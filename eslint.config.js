module.exports = [
    {
        files: ["**/*.js"],  // Changed from "*.js" to "**/*.js"
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "script",  // Must be "script" for CommonJS
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                module: "readonly",
                require: "readonly",
                process: "readonly"
            }
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