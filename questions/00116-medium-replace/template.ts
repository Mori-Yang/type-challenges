/**
 * 关键点在于 `${infer F}.${infer R}`中 模板字符串对类型F进行 贪婪匹配
 * 贪婪匹配 F会尽可能拿前面的字符，并以确定的点作为匹配结束点。
 * 但是当没有确切的点时，只会获取第一个字符。
 */
type Replace<S extends string, From extends string, To extends string> = From extends '' ? S :
  S extends `${infer F}${From}${infer R}`
    ? `${F}${To}${R}`
    : S
