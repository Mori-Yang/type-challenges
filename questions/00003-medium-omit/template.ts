/**
 * TypeScript 4.1 开始支持的键重映射 as
 */
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
