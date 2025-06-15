/**
 * 替换所有，则需要递归
 * 不过这里不会对替换一次后的字符串重新遍历，只会对剩余的字符串继续替换
 * 因此不是 ReplaceAll<`${F}${To}${R}`, From, To> 而是 `${F}${To}${ReplaceAll<R, From, To>}`
 */
type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S :
  S extends `${infer F}${From}${infer R}`
    ? `${F}${To}${ReplaceAll<R, From, To>}`
    : S
