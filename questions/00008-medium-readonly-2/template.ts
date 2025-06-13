/**
 * 1. 不能在同一个对象映射字面量{}中什么两个[key in ...] 映射块，
 *      应该使用 {} & {}
 *
 * 2. 为泛型参数赋值默认值 keyof T
 */
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  readonly [P in K]: T[P]
}
