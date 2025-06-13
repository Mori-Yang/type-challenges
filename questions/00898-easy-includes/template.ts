/**
 * 解法一：不能兼顾对boolean的判断：
 *      核心在于 条件判断中 A extends B 表示 A是否能够赋值给B
 *
 * 解法二：递归
 *      1. 使用infer将数组T中的元素类型推断为 First 和 Rest
 *      2. 如果 U 和第一个元素相等 则判断正确
 *          2.1 否则，递归Includes判断剩余Rest 和 U
 */

// 解法一
// type Includes<T extends readonly any[], U> = {
//   [P in T[number]]: true
// }[U] extends true ? true : false

// 解法二
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ?
  Equal<U, First> extends true ? true : Includes<Rest, U> : false
