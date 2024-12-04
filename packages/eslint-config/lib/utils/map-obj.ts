import mapObject from 'map-obj'

/**
 * Prefixes all object keys with a given string,
 *
 * @param source
 * @param prefix
 */
export function prefixKey<T>(source: Record<string, T>, prefix: string) {
    return mapObject(
        source,
        (key, value) => [`${prefix}${key}`, value],
    )
}
