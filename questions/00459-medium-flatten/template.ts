type Flatten<T extends any[], R extends any[] = []> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? Flatten<[...First, ...Rest], R>
    : Flatten<Rest, [...R, First]>
  : R

/**
 * 参数：待拍平剩余数组，已拍平结果数组
 * 1. 遍历数组
 * 2. 如果元素是数组，则将其展开并重新递归
 * 3. 如果元素不是数组，则将元素添加到结果数组中
 */
function flatten<T>(arr: T[], result: T[] = []): T[] {
  for (const item of arr) {
    if (Array.isArray(item))
      flatten([...item, ...arr.slice(1)], result)
    else
      result.push(item)
  }
  return result
}
