import pluginReact from 'eslint-plugin-react'
import pluginHooks from 'eslint-plugin-react-hooks'
import pluginRefresh from 'eslint-plugin-react-refresh'
import pluginTailwind from 'eslint-plugin-tailwindcss'

/** @type import('eslint').Linter.FlatConfig[] */
const configActReact = [
    {
        plugins: {
            '@react': pluginReact,
            '@hooks': pluginHooks,
            '@refresh': pluginRefresh,
            '@tailwind': pluginTailwind,
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
    },
]

export default configActReact
