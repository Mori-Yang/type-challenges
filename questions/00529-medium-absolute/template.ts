/**
 * 本题的目的是将所有 -xxx 中的 - 去掉
 * 对于number | string | bigint类型，可以使用 ${T} 将输入转换为字符串字面量类型
 * 核心在于：
 * 1. 将输入转换为字符串
 * 2. 字符串操作：删除第一位的负号
 */

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? R : `${T}`
