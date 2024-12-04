import type { ESLint } from 'eslint'
import ruleEnforce from './rules/enforce/index.js'

const plugin: ESLint.Plugin = {
    rules: {
        enforce: ruleEnforce,
    },

    configs: {
        recommended: {
            plugins: {
                // '@import-newlines': plugin,
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
    },
}

export default plugin
