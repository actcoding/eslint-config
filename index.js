import parserTs from '@typescript-eslint/parser'
import pluginTs from '@typescript-eslint/eslint-plugin'
import pluginStylistic from '@stylistic/eslint-plugin'
import pluginNewlines from 'eslint-plugin-import-newlines'

/** @type import('eslint').Linter.FlatConfig[] */
const config = [
    {
        ignores: [
            'dist/**/*',
            'node_modules/**/*',
        ],
    },
    {
        plugins: {
            '@stylistic': pluginStylistic,
            '@import-newlines': pluginNewlines,
        },
        rules: {
            '@stylistic/indent': [
                'error',
                4
            ],
            '@stylistic/linebreak-style': [
                'error',
                'unix'
            ],
            '@stylistic/quotes': [
                'error',
                'single'
            ],
            '@stylistic/semi': [
                'error',
                'never'
            ],
            '@stylistic/no-case-declarations': 'off',

            '@import-newlines/enforce': [
                'error',
                {
                    'items': 4,
                    'max-len': 120,
                    'semi': false,
                    'allowBlankLines': true,
                }
            ]
        },
    },
    {
        files: [
            '**/*.{ts,tsx}'
        ],
        languageOptions: {
            parser: parserTs
        },
        plugins: {
            '@ts': pluginTs,
        },
        rules: {
            '@ts/no-unused-vars': [
                'error',
                {
                    'varsIgnorePattern': '^_.*'
                }
            ],
        }
    }
]

export default config
