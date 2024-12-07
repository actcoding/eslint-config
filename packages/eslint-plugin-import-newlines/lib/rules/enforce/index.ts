import type { Rule } from 'eslint'
import { enforceConfig, jsonSchema } from './config.js'

const plugin: Rule.RuleModule = {
    meta: {
        type: 'layout',
        docs: {
            description: 'Enforce multiple lines for import statements past a certain number of items',
            category: 'Stylistic Issues',
            url: 'https://github.com/actcoding/eslint-config',
        },
        fixable: 'whitespace',
        schema: jsonSchema,
        messages: {
            mustSplitMany: 'Imports must be broken into multiple lines if there are more than {{maxItems}} elements.',
            mustSplitLong: 'Imports must be broken into multiple lines if the line length exceeds {{maxLineLength}} characters, saw {{lineLength}}.',
            mustNotSplit: 'Imports must not be broken into multiple lines if there are {{maxItems}} or less elements.',
        },
    },
    create(context) {
        const { success, error, data: config } = enforceConfig.safeParse(context.options[0])
        if (!success) {
            throw new Error(`invalid config: ${error.message}`)
        }

        return {
            ImportDeclaration(node) {
                if (!node.loc) {
                    return
                }

                const identifiers = node.specifiers.filter(s => s.type === 'ImportSpecifier')
                const identifierNames = identifiers
                    .sort((a, b) => a.imported.name.localeCompare(b.imported.name))
                    .map(s => `\t${s.imported.name}`)
                const replaced = ['import {', identifierNames.join(',\n'), `} from ${node.source.raw}`].join('\n')

                const length = node.loc.end.column - node.loc.start.column
                if (length > config.maxLineLength) {
                    context.report({
                        node,
                        messageId: 'mustSplitLong',
                        data: {
                            maxLineLength: config.maxLineLength.toString(),
                            lineLength: length.toString(),
                        },
                        fix: fixer => fixer.replaceText(node, replaced),
                    })
                }
            },
        }
    },
}

export default plugin
