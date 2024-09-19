import pluginTailwind from 'eslint-plugin-tailwindcss'
import { prefixKey } from '../utils/map-obj.js'

/** @type import('eslint').Linter.FlatConfig[] */
const configActTailwind = [
    {
        name: 'act/tailwind',
        plugins: {
            '@tailwindcss': pluginTailwind,
        },
        rules: {
            ...prefixKey(pluginTailwind.configs['recommended'].rules, '@'),
        },
    },
]

export default configActTailwind
