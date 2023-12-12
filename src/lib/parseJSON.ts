/** для безопасного парсинга */
const parseJSON = <T = any>(data: string): T => {
  if (!data) return

  try {
    return JSON.parse(data)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}

// ts-prune-ignore-next
export default parseJSON
