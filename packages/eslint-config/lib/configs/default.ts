import importNewlinesPlugin from '@actcoding/eslint-plugin-import-newlines'
import pluginStylistic from '@stylistic/eslint-plugin'
import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import type { ESLint, Linter } from 'eslint'

const configActDefault: Linter.Config[] = [
    {
        name: 'act/defaults/ignores',
        ignores: [
            '**/dist/',
        ],
    },
    {
        name: 'act/defaults/style',
        plugins: {
            '@stylistic': pluginStylistic as ESLint.Plugin,
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
        },
    },
    importNewlinesPlugin.configs.recommended,
    {
        name: 'act/defaults/typescript',
        files: [
            '**/*.{ts,tsx}',
        ],
        languageOptions: {
            parser: parserTs,
        },
        plugins: {
            '@ts': pluginTs as unknown as ESLint.Plugin,
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
