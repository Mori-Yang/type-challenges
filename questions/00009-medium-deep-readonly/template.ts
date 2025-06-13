/**
 * 需要深度遍历，因此采用递归的方式来解决。
 */

type BeReadonlyButDeeply<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
}
type DeepReadonly<T> = T extends Object
  ? T extends Function
    ? T
    : BeReadonlyButDeeply<T>
  : T

// type DeepReadonly<T> = {
//   readonly [k in keyof T]: T[k] extends Record<any, any>
//     ? T[k] extends Function
//       ? T[k]
//       : DeepReadonly<T[k]>
//     : T[k]
// }
