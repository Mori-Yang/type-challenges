/**
 * 通过 infer 来声明泛型变量，any占位最后一个元素，从而将数组分离
 */

type Pop<T extends any[]> = T extends [...infer R, any] ? R : []
