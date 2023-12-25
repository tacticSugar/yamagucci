/** временная типизация */
export type InputTypes = {
  /** стили из конфига для группы */
  cfgGroupStyles?: {
    /** свойства */
    [key:string]: string
  }
  /** стили из конфига */
  cfgStyles?: {
    [key: string]: string
  }
  /** чекбокс статус */
  checked?: boolean
  /** группа инпутов */
  group?: InputTypes[]
  /** название группы */
  groupTitle?: string
  /** инпуты в группе */
  inputs?: InputTypes[]
  /** лейбл */
  label?: string
  /** класс на лейбл */
  labelClassName?: string
  /** заголовок списка */
  listTitle?: string
  /** имя */
  name?: any
  /** ф-ция обработчик инпута */
  onChange?: (e: unknown) => void
  /** опции */
  options?: any
  /** api опшнов */
  optionsApi?: string
  /** плейсхолдер */
  placeholder?: string
  /** кол-во строк */
  textAreaRows?: number
  /** тип */
  type?: any
  /** для валидации */
  typeValue?: 'boolean' | 'number'
  /** валидации */
  validations?: any[]
  /** значение */
  value?: string | number | boolean
  /** значение из пропсов */
  valueProps?: any
  /** варианты размера */
  widthNumber?: string | number
  /** с листом или нет */
  withList?: boolean
}

export type CustomInputTypes = Omit<InputTypes, 'validations' | 'typeValue' | 'value'>

type FormTab = {
  /** класс на панель */
  panelClassName: string
  /** контент таба */
  tabContent: InputTypes[]
  /** тайтл таба */
  tabTitle: string
}

export type FormTabs = {
  /** табы */
  categoryTabs?: FormTab[]
  /** табы */
  productTabs?: FormTab[]
}

export type FormTypes = {
  /** форма */
  formContent: InputTypes[]
  /** panelClassName */
  panelClassName?: string
}
