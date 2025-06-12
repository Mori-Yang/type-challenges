/**
 * 泛型中使用 extends 的场景：
 * 1. 类型约束：<T extends {length:number}>
 *      约束泛型，上述示例表示传入的泛型必须包含length属性
 * 2. 条件类型中使用：T extends string、
 *      此时extends的意义为判断 T是否可以复制给string
 *      2.1 对于联合类型而言，进行extends会将联合类型逐一进行条件判断并将结果再联合
 *          这被称为条件类型的分发
 */

// extends 条件类型的分发
type MyExclude<T, U> = T extends U ? never : T
