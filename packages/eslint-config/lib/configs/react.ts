import pluginStylistic from '@stylistic/eslint-plugin'
import type { ESLint, Linter } from 'eslint'
import pluginReact from 'eslint-plugin-react'
import pluginHooks from 'eslint-plugin-react-hooks'
import pluginRefresh from 'eslint-plugin-react-refresh'
import { prefixKey } from '../utils/map-obj.js'

const configActReact: Linter.Config[] = [
    {
        name: 'act/react/main',
        plugins: {
            '@react': pluginReact,
            '@stylistic': pluginStylistic as ESLint.Plugin,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...prefixKey(pluginReact.configs['recommended'].rules, '@'),

            '@react/react-in-jsx-scope': 'off',
            '@react/prop-types': 'off',

            '@stylistic/jsx-closing-tag-location': ['error', 'tag-aligned'],
            '@stylistic/jsx-curly-brace-presence': ['error', 'never'],
        },
    },
    {
        name: 'act/react/hooks',
        plugins: {
            '@react-hooks': pluginHooks as ESLint.Plugin,
        },
        rules: {
            ...prefixKey(pluginHooks.configs['recommended'].rules, '@'),
        },
    },
    {
        name: 'act/react/refresh',
        plugins: {
            '@react-refresh': pluginRefresh,
        },
        rules: {
            '@react-refresh/only-export-components': 'warn',
        },
    },
]

export default configActReact
