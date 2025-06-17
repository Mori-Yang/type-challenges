/**
 * 如果直接对String类型获取其length属性：S['length']，只能获得length属性的类型number，并不能获得准确的长度
 * 为此，需要将S转换为元组
 *
 * 方法为：提供默认值为空数组的泛型T，将S存入
 * 递归第二次时获取长度
 */

type LengthOfString1<S extends string, T extends string[] = []> =
    S extends `${string}${infer R}`
      ? LengthOfString1<R, [...T, string]>
      : T['length']
