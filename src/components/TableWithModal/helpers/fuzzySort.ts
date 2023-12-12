/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { compareItems } from '@tanstack/match-sorter-utils'
// eslint-disable-next-line import/named
import { SortingFn, sortingFns } from '@tanstack/react-table'

/** fuzzySort */
// ts-prune-ignore-next
export const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  /** dir */
  let dir = 0

  /** только сортируем по рангу, если у колонки есть инфо по рангу */
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank!,
      rowB.columnFiltersMeta[columnId]?.itemRank!
    )
  }

  /** выполняет сортировку alphanumeric если ранги равны  */
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}
