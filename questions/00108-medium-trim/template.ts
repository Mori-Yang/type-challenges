/**
 * 同样遍历字符串： 模板字符串 + 递归
 */

type Space = ' ' | '\t' | '\n'
// type Trim<S extends string> = S extends `${Space}${infer Rest}${Space}`
//   ? Trim<Rest>
//   : S extends `${Space}${infer Rest}`
//     ? Trim<Rest>
//     : S extends `${infer Rest}${Space}`
//       ? Trim<Rest>
//       : S

// extends 联合类型
type Trim<S extends string> = S extends `${Space}${infer Rest}` | `${infer Rest}${Space}`
  ? Trim<Rest> : S
