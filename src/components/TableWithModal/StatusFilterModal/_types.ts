export type CheckboxFiltersModalTypes = {
  /** фильтры */
  columnFilters: {
    [key: string]: any
  }[]
  /** айди колонки */
  columnId: string
  /** изменение фильтра */
  setColumnFilters: (filters:
  {
  /** айди */
  id: string
  /** значение */
  value: string }[]) => void
  /** таблица */
  table: any
  /** заглавие */
  title: string
}
