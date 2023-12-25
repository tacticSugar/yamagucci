export type Category = {
  /** айди */
  id: number
  /** имя */
  name: string
  /** айди родителя */
  parent_id: number | null
  /** сортировка */
  sort: number
}

export type CategoriesModalTypes = {
  /** доп стили из конфига */
  cfgStyles?: {
    [key: string]: any
  }
  /** лейбл */
  label?: string
  /** имя */
  name?: string
  /** апи опшнов */
  optionsApi?: string
  /** вариант размера */
  sizeVariant?: string | number
  /** ширина */
  widthNumber?: number | string
}

export type CategoryCardTypes = {
  /** категория */
  category : {
  /** айди */
  id: number
  /** имя */
  name: string
  /** айди родителя */
  parent_id: number | null
  /** сортировка */
  sort: number
  }
  /** получить родительскую категорию */
  getParentName?: (id:number) => string
  /** обработчик клика */
  onClick: (id:number) => void
}
