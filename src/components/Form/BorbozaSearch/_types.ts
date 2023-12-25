export type BorbozaSearchTypes = {
   /** стили из конфига */
   cfgStyles?: {
    [key: string]: string
  }
  /** доп класс на враппе */
  className?: string
  /** изначальное значение из пропсов */
  defaultValueProps?: string
  /** доп класс на враппер инпута */
  inputWrapperClassName?: string
  /** показывать лоадер */
  isLoading?: boolean
  /** лейбл, описание */
  label?: string
  /** доп класс на главный опшн */
  mainOptionClassname?: string
  /** имя поля для формы */
  name?: 'borboza_id'
  /** функция обработчик */
  onChange?: (value: any) => void
  /** класс на контейнере опшнов */
  optionWrapperClassname?: string
  /** плейсхолдер */
  placeholder?: string
  /** доп класс на подопшн */
  subOptionClassname?: string
  /** ширина */
  widthNumber?: string | number
  /** с подсказкой */
  withTooltip?: boolean
}
