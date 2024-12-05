import type { ESLint } from 'eslint'
import ruleEnforce from './rules/enforce/index.js'

const importNewlinesPlugin = {
    rules: {
        enforce: ruleEnforce,
    },

    configs: {
        recommended: {
            name: 'act/import-newlines',
            plugins: {
                get '@import-newlines'(): ESLint.Plugin {
                    return importNewlinesPlugin
                },
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
} satisfies ESLint.Plugin

export default importNewlinesPlugin
