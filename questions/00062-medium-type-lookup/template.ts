/**
 * 用JS实现发现关键点在于对U这个联合类型进行遍历再获取
 *
 * 解法一：extends {type:T} 就可以直接查找
 * 解法二：遍历U生成一个对象，再从中获取目标
 */

// type LookUp<U extends { type: string }, T extends string> = U extends { type: T } ? U : never

type LookUp<U extends { type: string }, T extends string> = {
  [K in U['type']]: Extract<U, { type: T }>
}[T]

// JS 实现
function lookUp<U extends { type: string }>(entities: U[], type: string) {
  let resultEntity = null
  entities.forEach((entity) => {
    if (entity.type === type)
      resultEntity = entity
  })

  return resultEntity
}
