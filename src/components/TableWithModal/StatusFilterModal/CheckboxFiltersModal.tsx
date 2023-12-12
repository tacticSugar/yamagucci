import { FC } from 'react'

import { CustomCheckbox } from '@/src/components/Form/CustomCheckbox/CustomCheckbox'

import { CheckboxFiltersModalTypes } from './_types'
import styles from './CheckboxFiltersModal.module.scss'

/** переключатель колонок */
const CheckboxFiltersModal: FC<CheckboxFiltersModalTypes> = ({ columnFilters, columnId, setColumnFilters, table, title }) => {
  /** колонка */
  const column = table?.getColumn(columnId)

  /** отфильтрованные значения */
  const filterValues = Array.from(column.getFacetedUniqueValues().keys()).sort().filter(Boolean)

  /** изменение фильтра */
  const handleCheckboxChange = (status) => {
    /** проверка на наличие статуса */
    const isStatusFiltered = columnFilters.some(filter => filter.id === columnId && filter.value === status)

    /** новый фильтр */
    let newFilters

    if (isStatusFiltered) {
      newFilters = columnFilters.filter(filter => !(filter.id === columnId && filter.value === status))
    } else {
      newFilters = [...columnFilters, { id: columnId, value: status }]
    }

    setColumnFilters(newFilters)
  }

  return (
    <div className={styles.columnVisibilityWrapper}>
      {title && (
        <h4 className={styles.checkboxGroupHeader} >
          {title}
        </h4>
      )}
      {filterValues?.map((status:string, index) => (
        <CustomCheckbox
          checked={columnFilters?.some(filter => filter?.id === columnId && filter?.value === status)}
          key={index}
          label={status}
          labelClassName={styles.labelClassName}
          onChange={() => handleCheckboxChange(status)}
          type='checkbox'
        />
      ))}
    </div>
  )
}

export default CheckboxFiltersModal
