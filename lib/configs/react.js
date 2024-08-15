import pluginReact from 'eslint-plugin-react'
import pluginHooks from 'eslint-plugin-react-hooks'
import pluginRefresh from 'eslint-plugin-react-refresh'
import pluginTailwind from 'eslint-plugin-tailwindcss'
import { prefixKey } from '../utils/map-obj'

/** @type import('eslint').Linter.FlatConfig[] */
const configActReact = [
    {
        name: 'act/react',
        plugins: {
            '@react': pluginReact,
            '@react-hooks': pluginHooks,
            '@react-refresh': pluginRefresh,
            '@tailwindcss': pluginTailwind,
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
            ...prefixKey(pluginHooks.configs['recommended'].rules, '@'),

            '@react-refresh/only-export-components': 'warn',

            ...prefixKey(pluginTailwind.configs['recommended'].rules, '@'),
        },
    },
]

export default configActReact
