export type ButtonIconType = {
  /** элемент обертки */
  as?: string | React.JSXElementConstructor<any>
  /** доп. класс на кнопку */
  className?: string
  /** цвета кнопки */
  colorVariant: 'grayDark' | 'gray' | 'blue' | 'red' | 'black' | 'transparentBlue' | 'transparentRed' | 'transparent' | "gray-matt-black"
  /** флаг состояния */
  disabled?: boolean
  /** иконка */
  icon?: React.JSXElementConstructor<any> | string
  /** доп. класс иконки */
  iconClassName?: string
  /** дополнительные пропсы иконки */
  iconProps?: {
    [key: string]: any
  }
  /** класс для обертки иконки */
  iconWrapperClassName?: string
  /** лейбл */
  label?: string
  /** доп. класс лейбла */
  labelClassName?: string
  /** ф-я обработчик */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** цвета кнопки */
  paddingVariant: 'slim' | 'wide'
  /** тип */
  type?: string
  /** скрывать ли лейбл */
  withHiddenLabel?: boolean
  /** c иконкой или без */
  withIcon: boolean
  /** есть ли у иконки обертка */
  withIconWrapper?: boolean
}
