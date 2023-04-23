module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'i18next',
        'react',
        '@typescript-eslint',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['error', {
            extensions: ['.jsx', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'react/require-default-props': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'react/function-component-definition': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-shadow': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/react-in-jsx-scope': 'off',
        'no-underscore-dangle': 'off',
        'no-useless-escape': 'warn',
        'i18next/no-literal-string': ['warn', {
            markupOnly: true,
            ignoreAttribute: ['data-testid'],
        }],
        'max-len': ['error', {
            ignoreComments: true,
            code: 100,
        }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    }],
};
