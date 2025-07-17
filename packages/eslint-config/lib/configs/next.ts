import pluginNext from '@next/eslint-plugin-next'
import type { ESLint, Linter } from 'eslint'

const configActNext: Linter.Config[] = [
    {
        name: 'act/next',
        plugins: {
            '@next/next': pluginNext as ESLint.Plugin,
        },
        rules: {
            ...pluginNext.configs['recommended'].rules,
            ...pluginNext.configs['core-web-vitals'].rules,
        } as Linter.RulesRecord,
    },
]

export default configActNext
