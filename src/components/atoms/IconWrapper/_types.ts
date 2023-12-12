export type IconWrapperTypes = {
  /** компонент иконки из файла icons */
  IconComponent: React.ElementType | string
  /** доп класс на иконку свг */
  iconClassname?: string
  /** обработчик клика на обертку */
  onClick?: () => void
  /** доп класс на врапер */
  wrapperClassname?: string
};
