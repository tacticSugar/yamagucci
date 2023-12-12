/* eslint-disable import/named */
import { RankingInfo } from '@tanstack/match-sorter-utils'
import { Column, FilterFn, Table } from '@tanstack/react-table'

import { ResultCategories } from '@/src/api/useFetchCategories/useFetchCategories'
import { ResultProducts } from '@/src/api/useFetchProducts/useFetchProducts'

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

export type ColumnResultProducts = ResultProducts['data'][number]
export type ColumnResultCategories = ResultCategories['data'][number]

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
