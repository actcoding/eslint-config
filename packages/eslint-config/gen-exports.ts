import { log } from 'node:console'
import { readdir } from 'node:fs/promises'
import { basename, join } from 'node:path'

const files = await readdir('./dist/configs', {
    withFileTypes: true,
})

const jsFiles = files.filter(file => file.name.endsWith('.js'))

const exports = jsFiles.map<[string, { default: string, types: string }]>(file => ([
    `./${basename(file.name, '.js')}`,
    {
        default: './' + join(file.parentPath, file.name),
        types: './' + join(file.parentPath, basename(file.name, '.js') + '.d.ts'),
    },
]))

const entries = Object.fromEntries(exports.sort(([a], [b]) => a.localeCompare(b)))

log(JSON.stringify(entries, null, 4))
