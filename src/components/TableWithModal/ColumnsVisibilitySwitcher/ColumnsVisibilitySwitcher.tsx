import { FC } from 'react'

import { CustomCheckbox } from '@/src/components/Form/CustomCheckbox/CustomCheckbox'
import { ColumnsVisibilitySwitcherTypes } from '@/src/components/TableWithModal/_types'
import { getColumnNameById } from '@/src/components/TableWithModal/helpers/getColumnNameById'

import styles from './ColumnsVisibilitySwitcher.module.scss'

/** переключатель колонок */
const ColumnsVisibilitySwitcher:FC<ColumnsVisibilitySwitcherTypes> = ({ table }) => (
  <div className={styles.columnVisibilityWrapper}>
    <h4 className={styles.checkboxGroupHeader}>
      Показывать столбцы
    </h4>
    <CustomCheckbox
      checked={table.getIsAllColumnsVisible()}
      label='Выбрать все'
      labelClassName={styles.labelClassName}
      onChange={table.getToggleAllColumnsVisibilityHandler()}
      type='checkbox'
    />
    {table?.getAllLeafColumns()?.map(column => (
      <CustomCheckbox
        checked={column.getIsVisible()}
        key={column.id}
        label={getColumnNameById(column)}
        labelClassName={styles.labelClassName}
        onChange={column.getToggleVisibilityHandler()}
        type='checkbox'
      />
    ))}
  </div>
)

export default ColumnsVisibilitySwitcher
