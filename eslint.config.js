const js = require('@eslint/js');
const ts = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const prettier = require('eslint-config-prettier');
const pluginPrettier = require('eslint-plugin-prettier');

module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser,
            parserOptions: {
                project: ['./tsconfig.json', './tsconfig.test.json'],
                sourceType: 'module',
            },
            globals: {
                console: 'readonly',
                process: 'readonly',
            },
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': ts,
            prettier: pluginPrettier,
        },
        rules: {
            ...ts.configs.recommended.rules,
            quotes: ['error', 'double'],
            radix: 'off',
            'prettier/prettier': ['error', { endOfLine: 'auto' }],
        },
    },
    {
        files: ['test/**/*.ts', 'test/**/*.tsx'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                jest: 'readonly'
            }
        }
    },
    prettier,
    {
        ignores: ['dist', 'coverage', 'node_modules'],
    },
];