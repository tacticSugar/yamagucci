export type TechParamsListTypes = {
  /** название поля формы */
  name?: string
}

export type handleChangeOptionParams = {
  /** тип действия */
  actionType: 'updateValue' | 'updateParameter' | 'updateFilter' | 'toggleActive' | 'delete' | 'addNew'
  /** id */
  itemId?: number
  /** значение */
  selectedValue?: any
}
