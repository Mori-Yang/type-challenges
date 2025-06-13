/**
 * 使用 infer 获取参数类型
 *      使用 extends 来间接引入infer，从而声明参数类型Args
 *
 * infer 对数组的结果：[1,'str',true]: infer S ==> type S === [number,string,boolean]
 *      注：infer只能在条件类型中使用
 */

type MyParameters<T extends (...args: any[]) => any> = T extends (...a: infer Args) => any ? Args : false
