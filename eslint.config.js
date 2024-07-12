import eslintConfigAct from './index.js'

/** @type import('eslint').Linter.FlatConfig[] */
const config = [
    ...eslintConfigAct,
    {
        ignores: [
            '*.d.ts',
        ]
    }
]

export default config
