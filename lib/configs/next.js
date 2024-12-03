import pluginNext from '@next/eslint-plugin-next'

/** @type import('eslint').Linter.Config[] */
const configActNext = [
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
