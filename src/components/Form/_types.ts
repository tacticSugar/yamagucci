/** временная типизация */
export type InputTypes = {
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
  name?: string
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
  type?: 'text' | 'radio' | 'email' | 'password' | 'select' | 'checkbox'
  /** для валидации */
  typeValue?: 'boolean' | 'number'

  /** валидации */
  validations?: any[]
  /** значение */
  value?: string | number | boolean
  /** значение из пропсов */
  valueProps?: any
  /** варианты размера */
  widthNumber?: string
}

export type CustomInputTypes = Omit<InputTypes, 'validations' | 'typeValue' | 'value'>

type TabInput = {
  /** стили из конфига для группы */
  cfgGroupStyles?: {
    /** свойства */
    [key:string]: string
  }
  /** стили из конфига */
  cfgStyles?: {
    /** свойства */
    [key:string]: string
  }
  /** название группы */
  groupTitle?: string
  /** инпуты в группе */
  inputs?: TabInput[]
  /** лейбл */
  label?: string
  /** название для листа */
  listTitle?: string
  /** имя */
  name?: string
  /** api опшнов */
  optionsApi?: string
  /** плейсхолдер */
  placeholder?: string
  /** кол-во строк */
  textAreaRows?: number
  /** тип */
  type?: string
  /** для валидации */
  typeValue?: string
  /** валидации */
  validations?: any[]
  /** ширина */
  widthNumber?: number
  /** с листом или нет */
  withList?: boolean
}

type FormTab = {
  /** класс на панель */
  panelClassName: string
  /** контент таба */
  tabContent: TabInput[]
  /** тайтл таба */
  tabTitle: string
}

export type FormTabs = {
  /** табы */
  categoryTabs?: FormTab[]
  /** табы */
  productTabs?: FormTab[]
}
