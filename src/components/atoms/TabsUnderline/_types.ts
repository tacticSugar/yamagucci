export type TabsUnderlineTypes = {
  /** дефолтный индекс */
  defaultIndex?: number
  /** обработчик переключения таба */
  handleChangeSelectedIndex?(...args: any[]): any
  /** обработчик клика на таб */
  handleClickOnTab?: (index: number) => void
  /** true при загрузке даннных */
  isLoading?: boolean
  /** дополнительный класс для листа */
  listClassName?: string
  /** доп. класс выбранной  */
  selectedTabPanelClassName?: string
  /** данные для вывода TabPanel */
  tabPanels?: any[]
  /** дополнителььный класс для таба */
  tabTitleClassName?: string
  /** данные для табов */
  tabTitles: any[]
  /** дополнителььный класс для обёртки */
  wrapperClassName?: string
}
