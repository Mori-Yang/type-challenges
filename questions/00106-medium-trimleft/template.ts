/**
 * 关键是TS如何对字符串进行遍历：
 *      遍历的方式就是模板字符串+infer提取子串： S extends `${infer F}$infer{R}` 获取第一个字符，再使用递归进行遍历
 */
type TrimLeft<S extends string> = S extends `${infer F}${infer R}`
  ? F extends ' ' | '\n' | '\t'
    ? TrimLeft<R>
    : S
  : ''
