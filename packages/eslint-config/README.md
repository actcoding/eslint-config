![NPM Version](https://img.shields.io/npm/v/%40actcoding%2Feslint-config)
![NPM Last Update](https://img.shields.io/npm/last-update/%40actcoding%2Feslint-config)

# @actcoding/eslint-config

> An opinionated eslint flat config.

This package provides multiple, opinionated eslint configs we use in our projects.

## Install

```shell
npm install -D @actcoding/eslint-config
```

## Usage

`eslint.config.js`

```js
import { configActDefault } from '@actcoding/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
const config = [
    ...configActDefault,
    {
        ignores: [
            '*.d.ts',
        ]
    }
]

export default config
```
