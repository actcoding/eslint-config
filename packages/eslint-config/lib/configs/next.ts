import pluginNext from '@next/eslint-plugin-next'
import type { Linter } from 'eslint'

const configActNext: Linter.Config[] = [
    {
        name: 'act/next',
        plugins: {
            '@next/next': pluginNext,
        },
        rules: {
            ...pluginNext.configs['recommended'].rules,
            ...pluginNext.configs['core-web-vitals'].rules,
        },
    },
]

export default configActNext
