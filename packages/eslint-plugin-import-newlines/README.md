# @actcoding/eslint-plugin-import-newlines

> ESLint plugin for enforcing newlines in ES6 import statements past a certain number of items.

Parts of the code are taken from [SeinopSys/eslint-plugin-import-newlines](https://github.com/SeinopSys/eslint-plugin-import-newlines), which is also [MIT licensed](https://github.com/SeinopSys/eslint-plugin-import-newlines/blob/main/LICENSE.md).

## Install

```shell
npm install -D @actcoding/eslint-plugin-import-newlines
```

## Usage

### Provided config (recommended)

`eslint.config.js`

```js
import importNewlinesPlugin from '@actcoding/eslint-plugin-import-newlines'

/** @type {import('eslint').Linter.Config[]} */
const config = [
    importNewlinesPlugin.configs.recommended,
]

export default config
```

### Manual

`eslint.config.js`

```js
import importNewlinesPlugin from '@actcoding/eslint-plugin-import-newlines'

/** @type {import('eslint').Linter.Config[]} */
const config = [
    {
        name: 'app/style/imports',
        plugins: {
            '@import-newlines': importNewlinesPlugin,
        },
        rules: {
            '@import-newlines/enforce': [
                'error',
                {
                    'maxItems': 4,
                    'maxLineLength': 120,
                },
            ],
        },
    },
]

export default config
```

## Rules

### `@import-newlines/enforce`

Enforce multiple lines for import statements past a certain number of items

#### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| maxItems | `integer` | 4 | maximum amount of imported items per line |
| maxLineLength | `integer` | 120 | maximum line length of an import statement |
