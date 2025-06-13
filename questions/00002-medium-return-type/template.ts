/**
 * 与获取函数的参数类型相似，使用 infer 在条件类型中声明并推断类型
 */

type MyReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never
