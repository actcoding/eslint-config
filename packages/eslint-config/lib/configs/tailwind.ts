import type { ESLint, Linter } from 'eslint'
import pluginTailwind from 'eslint-plugin-tailwindcss'
import { prefixKey } from '../utils/map-obj.js'

const configActTailwind: Linter.Config[] = [
    {
        name: 'act/style/tailwind',
        plugins: {
            '@tailwindcss': pluginTailwind as ESLint.Plugin,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            ...prefixKey(pluginTailwind.configs['recommended'].rules, '@'),
        },
    },
]

export default configActTailwind
