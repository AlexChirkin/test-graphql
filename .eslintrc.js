module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "babel",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "no-unused-expressions": 0,
        "babel/no-unused-expressions": 1,
        "import/order": ["error", {"groups": ["builtin", "external", "parent", "sibling", "index"]}]
    }
};