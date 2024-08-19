import parserTs from '@typescript-eslint/parser'
import pluginTs from '@typescript-eslint/eslint-plugin'
import pluginStylistic from '@stylistic/eslint-plugin'
import pluginNewlines from 'eslint-plugin-import-newlines'

/** @type import('eslint').Linter.FlatConfig[] */
const configActDefault = [
    {
        name: 'act/defaults/ignores',
        ignores: [
            'dist/**/*',
            'node_modules/**/*',
        ],
    },
    {
        name: 'act/defaults/style',
        plugins: {
            '@stylistic': pluginStylistic,
            '@import-newlines': pluginNewlines,
        },
        rules: {
            '@stylistic/indent': [
                'error',
                4,
            ],
            '@stylistic/linebreak-style': [
                'error',
                'unix',
            ],
            '@stylistic/quotes': [
                'error',
                'single',
            ],
            '@stylistic/semi': [
                'error',
                'never',
            ],
            '@stylistic/no-case-declarations': 'off',
            '@stylistic/comma-dangle': ['error', 'always-multiline'],

            '@import-newlines/enforce': [
                'error',
                {
                    'items': 4,
                    'max-len': 120,
                    'semi': false,
                    'allowBlankLines': true,
                },
            ],
        },
    },
    {
        name: 'act/defaults/typescript',
        files: [
            '**/*.{ts,tsx}',
        ],
        languageOptions: {
            parser: parserTs,
        },
        plugins: {
            '@ts': pluginTs,
        },
        rules: {
            '@ts/no-unused-vars': [
                'error',
                {
                    'varsIgnorePattern': '^_.*',
                },
            ],
        },
    },
]

export default configActDefault
