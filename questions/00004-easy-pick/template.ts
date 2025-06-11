/**
 * 1. 泛型中可以使用extends来约束泛型的范围
 */

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
