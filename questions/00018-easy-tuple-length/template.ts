/**
 * 目标是获取数组的长度，如果数组不是readonly或是一直长度的类型，则最终只会推断到number类型
 * 为此，测试用例中使用了 as const 将变量作为只读，这样ts就可以确定变量的具体信息了。
 *
 * 综上所述，我们的泛型也同样需要readonly进行约束
 */

type Length<T extends readonly string[]> = T['length']
