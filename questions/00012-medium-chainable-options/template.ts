/**
 * 声明泛型变量T：默认值，也将作为get的返回值类型,是已经设置了的键值对
 * option 函数的类型用于 递归收集
 *    接收两个参数，对应两个泛型：K string 类型，V不确定
 *          key的约束： T中的已存在键，则不允许再次设置，否则就是未设置过的类型，为K
 *          返回值类型：递归Chainable,需要注意的是，递归传入的泛型为：设置了的所有配置
 *                    T 联合& 当前设置的{K:V}
 *                    但是，当设置了两次相同的Key，但值类型不同时，T & Record<K,V>无法覆盖，因此需要将K从T中剥离再添加：Omit<T,K> & Record<K,V>
 */

type Chainable<T = {}> = {
  option: <K extends string, V>(key: K extends keyof T ? never : K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
  get: () => T
}
