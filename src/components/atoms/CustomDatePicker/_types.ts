export type CustomDateInputProps = {
  /** обработчик клика */
  onClick?: () => void
  /** значение */
  value?: string | null
};

export type CustomDatePickerTypes = {
  /** доп класс на обертку */
  className?: string
  /** label */
  label?: string
  /** начальная дата */
  startDateProps?: string | Date
}
