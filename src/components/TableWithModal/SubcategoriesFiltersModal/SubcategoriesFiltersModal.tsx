import type { FC } from 'react'

import { CustomCheckbox } from '@/src/components/Form/CustomCheckbox/CustomCheckbox'

import styles from './SubcategoriesFilters.module.scss'

type SubcategoriesFiltersTypes = {
  /** таблица */
  table: any
  /** включает/выключает раскрытие */
  toggleEnableExpanding: () => void
}

/** фильтры включения категорий и подкатегорий */
const SubcategoriesFilters: FC<SubcategoriesFiltersTypes> = ({ table, toggleEnableExpanding }) => (
  <div className={styles.columnVisibilityWrapper}>
    <h4 className={styles.checkboxGroupHeader} >
      Показывать категории
    </h4>
    <CustomCheckbox
      checked={table.getIsAllRowsExpanded()}
      label='Подкатегории каталога'
      labelClassName={styles.labelClassName}
      onChange={() => table.toggleAllRowsExpanded()}
      type='checkbox'
    />
    <CustomCheckbox
      checked={table.getCanSomeRowsExpand()}
      label='Категории'
      labelClassName={styles.labelClassName}
      onChange={toggleEnableExpanding}
      type='checkbox'
    />
  </div>
)

export default SubcategoriesFilters
