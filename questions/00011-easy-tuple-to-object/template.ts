/**
 *  1. keyof any 的结果是：number | string | symbol
 *      1.1 也可以使用 PropertyKey， PropertyKey = number | string | symbol
 *  2. [X in Y] 后，X为可访问
 *  3. array类型可以使用 number 来作为索引获取
 */

type TupleToObject<T extends readonly (keyof any)[]> = {
  [key in T[number]]: key
}

// interface X {
//   name: string
//   1: 2
// }
// type Y = Array<string>
// type nX = X[number]
// type nY = Y[number]
