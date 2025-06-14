/**
 * 数组类型可以通过 length 属性获取其长度
 * 但是无法做运算符操作
 * 但是可以通过 添加一个元素 + 展开运算符 ([any,...T]) 来获取数组的 length-1 索引的元素
 */
type Last<T extends any[]> = T['length'] extends 0 ? never : [never, ...T][T['length']]
