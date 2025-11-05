module.exports = [
    {
        files: ["*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "script",  // Changed from "module" to "script"
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                module: "readonly",
                require: "readonly"
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