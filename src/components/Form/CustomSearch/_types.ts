export type CustomSearchTypes = {
   /** стили из конфига */
   cfgStyles?: {
    [key: string]: string
  }
  /** доп класс на враппе */
  className?: string
  /** закрывать ли по клику на опшн */
  closeOnItemClick?: boolean
  /** изначальное значение из пропсов */
  defaultValueProps?: string
  /** массив неактивных опшнов */
  disabledIds?: any[]
  /** доп класс на враппер инпута */
  inputWrapperClassName?: string
  /** пустой инпут после выбора */
  isErasedSearchAfterPick?: boolean
  /** показывать лоадер */
  isLoading?: boolean
  /** массив опшнов */
  items?: any[]
  /** лейбл, описание */
  label?: string
  /** доп класс на главный опшн */
  mainOptionClassname?: string
  /** максимальное количество опшнов */
  maxItems?: number
  /** имя поля данных */
  name?: string
  /** функция обработчик */
  onChange?: (value: any) => void
  /** класс на контейнере опшнов */
  optionWrapperClassname?: string
  /** плейсхолдер */
  placeholder?: string
  /** доп класс на подопшн */
  subOptionClassname?: string
  /** ширина */
  widthNumber?: string
  /** с чекбоксами */
  withCheckboxes?: boolean
  /** с подсказкой */
  withTooltip?: boolean
}
