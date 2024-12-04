import type { JSONSchema4 } from 'json-schema'
import { z } from 'zod'

export const enforceConfig = z.strictObject({
    maxItems: z.number().int().min(1).default(4),
    maxLineLength: z.number().int().min(1).default(120),
})

export const jsonSchema: JSONSchema4 = {
    type: 'array',
    maxItems: 1,
    items: {
        properties: {
            maxItems: {
                required: false,
                type: 'integer',
                minimum: 1,
                default: 4,
            },
            maxLineLength: {
                required: false,
                type: 'integer',
                minimum: 1,
                default: 120,
            },
        },
    },
}
