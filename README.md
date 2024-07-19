# @actcoding/eslint-config

An opinionated eslint flat config.

## Install

```shell
npm install -D @actcoding/eslint-config
```

## Usage

`eslint.config.js`

```js
import eslintConfigAct from '@actcoding/eslint-config'

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
```

## License

[MIT](LICENSE)
