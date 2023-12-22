/* eslint-disable import/named */
import { RankingInfo } from '@tanstack/match-sorter-utils'
import { Column, FilterFn, Table } from '@tanstack/react-table'

import { FetchCategoriesOriginalResult } from '@/src/api/useFetchCategories/_types'
import { FetchProductsOriginalResult } from '@/src/api/useFetchProducts/_types'

declare module '@tanstack/table-core' {
  export interface FilterFns {
    /** fuzzy */
    fuzzy: FilterFn<unknown>
  }
 export interface FilterMeta {
    /** itemRank */
    itemRank: RankingInfo
  }
}

export type TableWithModalTypes = {
  /** строение таблицы по колонкам */
  columns: any[]
  /** массив элементов */
  data: any
  /** заглавие таблицы */
  title?:string
  /** временное решение для переключения видимости */
  withCheckboxFilters?: boolean
  /** временное решение для переключения видимости */
  withSubcategoriesFilters?: boolean
}

export type ColumnResultProducts = FetchProductsOriginalResult['data'][number]
export type ColumnResultCategories = FetchCategoriesOriginalResult['data'][number]

export type TableMarkupTypes = {
  /** таблица */
  table: Table<any>
}

export type PaginationTypes = {
  /** тиблица */
  table: Table<any>
}

export type ColumnsVisibilitySwitcherTypes = {
  /** тиблица */
  table: Table<any>
}

export type FilterTypes = {
  /** колонка */
  column: Column<any, unknown>
  /** таблица */
  table: Table<any>
}

export type DebounceInputTypes = {
  /** время дебаунса */
  debounce?: number
  /** ф-ция обработчик изменения инпута */
  onChange: (value: string | number) => void
  /** начальное значение  */
  value: string | number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>

export type ColumnVisibilityState = {
  [key: string]: boolean
}
