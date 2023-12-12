import { rankItem } from '@tanstack/match-sorter-utils'
// eslint-disable-next-line import/named
import { FilterFn } from '@tanstack/react-table'

/** fuzzyFilter */
export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  /** ранжирование айтема */
  const itemRank = rankItem(row.getValue(columnId), value)

  /** сохраняем ранжирование */
  addMeta({
    itemRank
  })

  // возвращаем если айтем должен быть отфильтрован in/out
  return itemRank.passed
}
