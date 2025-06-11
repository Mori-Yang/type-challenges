/**
 * T 已经被约束为数组类型，需要额外注意的是
 *      判断数组是否为空数组
 * 1. 判断 length 属性是否 extends 0 (extends 后是一个具体的值，因此可以理解为等于)
 * 2. 判断 T 是否 extends [] (同上，[] 是一个具体的值，即空数组)
 */

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
type First<T extends any[]> = T extends [] ? never : T[0]
