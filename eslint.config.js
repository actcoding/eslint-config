import { configActDefault } from './lib/index.js'

/** @type import('eslint').Linter.FlatConfig[] */
const config = [
    ...configActDefault,
    {
        ignores: [
            '*.d.ts',
        ]
    }
]

export default config
