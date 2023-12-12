/** аналог times в lodash */
const times = <T = any>(count: number, func?: (index: number) => T): T[] => {
  /** счетчик */
  let i = 0
  /** массив для результатов */
  const results = []

  while (i < count) {
    results.push(func ? func(i) : i)
    i += 1
  }

  return results
}

export default times
