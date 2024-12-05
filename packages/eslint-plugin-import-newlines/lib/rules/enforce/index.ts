import type { Rule } from 'eslint'
import { enforceConfig, jsonSchema } from './config.js'
import { inspect } from 'node:util'

/**
 * Groups an array of elements by keys extracted using a specified function.
 *
 * @param array - The array of elements to be grouped.
 * @param keyExtractor - A function that takes an element and returns the key to group by.
 * @returns An object with keys being the unique values returned by the keyExtractor and values being arrays of corresponding elements.
 */
function groupBy<T, R extends keyof any>(array: T[], keyExtractor: (item: T) => R) {
    const initial: Record<R, T[]> = {} as Record<R, T[]>

    return array.reduce((result, current) => {
        const key = keyExtractor(current)

        if (!result[key]) {
            result[key] = []
        }

        result[key].push(current)
        return result
    }, initial)
}

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
                const identifiersPerLine = groupBy(identifiers, i => {
                    if (!i.loc) {
                        throw new Error()
                    }

                    return i.loc.start.line
                })
                console.log(inspect(Object.entries(identifiersPerLine).map(([line, specs]) => [
                    line,
                    specs.map(s => ({ name: s.imported.name, loc: s.imported.loc, range: s.imported.range })),
                ]), false, null))

                const identifierNames = identifiers
                    .sort((a, b) => a.imported.name.localeCompare(b.imported.name))
                    .map(s => `\t${s.imported.name}`)
                const replaced = ['import {', identifierNames.join(',\n'), `} from ${node.source.raw}`].join('\n')

                const length = node.loc.end.column - node.loc.start.column
                if (identifiers.length > config.maxItems) {
                    context.report({
                        node,
                        messageId: 'mustSplitMany',
                        data: {
                            maxItems: config.maxItems.toString(),
                        },
                        fix: fixer => fixer.replaceText(node, replaced),
                    })
                }
                else if (length > config.maxLineLength) {
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
