import { configActDefault, configActReact, configActNext } from './lib/index.ts'

/** @type import('eslint').Linter.Config[] */
const config = [
    ...configActDefault,
    ...configActReact,
    ...configActNext,
]

export default config
