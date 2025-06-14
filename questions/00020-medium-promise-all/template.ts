/**
 * 元组类型：
 * 有序且长度固定
 *      例如：[number,boolean,string] 就是一个元组类型；[number,...string]不是，因为长度不固定
 *
 *
 * 这是一个函数类型声明，函数为PromiseAll，
 * PromiseAll([1, 2, Promise.resolve(3)]) 的类型的结果是：Promise<[1,2,number]>
 *      其中[1,2,number]是一个元组，而不是简单的数组
 * 因此PromiseAll接收的参数为一个元组，即 readonly的数组
 * 返回值类型为 Promise<元组>
 *
 * { [K in keyof T] } : ... 如果T为元组，则{ [K in keyof T] }会被推导为元组
 * 如果T为数组，则会被推到尾
 * Awaited 就是对Promise的解封装，将Promise<T>中的T拿出来
 */
declare function PromiseAll<T extends any[]>(values: readonly [...T]):
Promise<{
  [K in keyof T]: Awaited<T[K]>
}>
