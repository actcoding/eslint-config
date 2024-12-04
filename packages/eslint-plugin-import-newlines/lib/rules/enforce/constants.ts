export const SPEC_IMPORT = 'ImportSpecifier'
export const SPEC_DEFAULT_IMPORT = 'ImportDefaultSpecifier'
export const SPEC_NAMESPACE_IMPORT = 'ImportNamespaceSpecifier'
export const nonSplittableImportTypes = new Set([SPEC_DEFAULT_IMPORT, SPEC_NAMESPACE_IMPORT])
