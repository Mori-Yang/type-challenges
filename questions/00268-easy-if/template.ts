/**
 * extends 在 条件判断中 A extends B ？：
 *      可以表示为 A是否可以赋值给 B
 */
type If<C extends boolean, T, F> = C extends true ? T : F
