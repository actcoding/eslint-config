import parserTs from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'
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
            '@stylistic': stylistic,
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
            '@stylistic/no-unused-vars': [
                'error',
                {
                    'varsIgnorePattern': '^_.*'
                }
            ],

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
    }
]

export default config
