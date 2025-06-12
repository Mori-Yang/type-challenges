/**
 * 1. 数组合并可以使用展开运算符 [...A,...B]
 */
type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]
