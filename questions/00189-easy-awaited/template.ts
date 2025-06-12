/**
 * 1. Promise 类型是严格遵循Promise A+规范的，但是很多时候自己实现的Promise并不完全遵循，因此使用PromiseLike类型更合适
 * 2. 在条件类型中推断（使用infer）：infer 可以以声明的方式引入一个新的泛型变量
 */

type MyAwaited<T extends PromiseLike<any>> =
T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U> : U
  : never
