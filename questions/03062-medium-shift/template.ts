/**
 * 与 Pop 同理，通过 extends 子句，使用 infer 声明泛型变量，在首位占位获得目标数组
 */
type Shift<T extends any[]> = T extends [any, ...infer R] ? R : []
