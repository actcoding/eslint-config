import { configActDefault, configActReact, configActNext } from './lib/index.js'

/** @type import('eslint').Linter.FlatConfig[] */
const config = [
    ...configActDefault,
    ...configActReact,
    ...configActNext,
]

export default config
