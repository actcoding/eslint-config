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
        rules: {
            '@hooks/rules-of-hooks': 'error',
            '@hooks/exhaustive-deps': 'warn',

            '@refresh/only-export-components': 'warn',

            '@tailwind/classnames-order': 'warn',
            '@tailwind/enforces-negative-arbitrary-values': 'warn',
            '@tailwind/enforces-shorthand': 'warn',
            '@tailwind/migration-from-tailwind-2': 'warn',
            '@tailwind/no-arbitrary-value': 'off',
            '@tailwind/no-custom-classname': 'warn',
            '@tailwind/no-contradicting-classname': 'error',
            '@tailwind/no-unnecessary-arbitrary-value': 'warn',
        },
    },
]

export default configActReact
