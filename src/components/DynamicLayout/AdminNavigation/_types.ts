export type SubNavItemTypes = {
  /** ссылка */
  href: string
  /** иконка */
  icon?: React.FC<any> | string
  /** айди */
  id: number
  /** название меню */
  title: string
}

export type AdminNavItemTypes = {
  /** ссылка если без сабменю */
  href?: string
  /** иконка */
  icon?: React.FC<any> | string
  /** айди */
  id: number
  /** сабменю */
  submenu?: SubNavItemTypes[]
  /** название меню */
  title: string
}
