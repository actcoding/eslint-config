import mapObject from 'map-obj'

/**
 * Prefixes all object keys with a given string,
 *
 * @param {Record<string, string>} source
 * @param {string} prefix
 */
export function prefixKey(source, prefix) {
    return mapObject(
        source,
        (key, value) => [`${prefix}${key}`, value]
    )
}
