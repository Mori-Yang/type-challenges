/**
 * 1. readonly 修饰符可以修饰可读
 */
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}
