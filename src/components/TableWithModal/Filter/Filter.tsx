// eslint-disable-next-line import/named
import { type FC, useMemo } from 'react'

import { FilterTypes } from '@/src/components/TableWithModal/_types'
import DebouncedInput from '@/src/components/TableWithModal/DebouncedInput/DebouncedInput'
import { getColumnNameById } from '@/src/components/TableWithModal/helpers/getColumnNameById'

import styles from './Filter.module.scss'

/** домашняя страница */
const Filter: FC<FilterTypes> = ({
  column,
  table
}) => {
  /** первое значение */
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  /** отфильтрованное значение колонки */
  const columnFilterValue = column.getFilterValue()

  /** отсортированные уникальные значения */
  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [column.getFacetedUniqueValues()]
  )

  /** плейсхолдер */
  const placeholder = getColumnNameById(column)

  return typeof firstValue === 'number'
    ? (
      <div>
        <div className={styles.minMaxWrapper}>
          <DebouncedInput
            className={styles.minMaxInput}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            onChange={value =>
              column.setFilterValue((old: [number, number]) => [value, old?.[1]])}
            placeholder={`Min ${
              column.getFacetedMinMaxValues()?.[0]
                ? `(${column.getFacetedMinMaxValues()?.[0]})`
                : ''
            }`}
            type='number'
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
          />
          <DebouncedInput
            className={styles.minMaxInput}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            onChange={value =>
              column.setFilterValue((old: [number, number]) => [old?.[0], value])}
            placeholder={`Max ${
              column.getFacetedMinMaxValues()?.[1]
                ? `(${column.getFacetedMinMaxValues()?.[1]})`
                : ''
            }`}
            type='number'
            value={(columnFilterValue as [number, number])?.[1] ?? ''}
          />
        </div>
      </div>
    )
    : (
      <>
        <datalist id={column.id + 'list'}>
          {sortedUniqueValues.slice(0, 5000).map((value: any) => (
            <option
              key={value}
              value={value}
            />
          ))}
        </datalist>
        <DebouncedInput
          className={styles.searchInput}
          list={column.id + 'list'}
          onChange={value => {
            column.setFilterValue(value)

            if (value) table.toggleAllRowsExpanded(true)
            if (!value) table.toggleAllRowsExpanded(false)
          }}
          placeholder={`${placeholder}... (${column.getFacetedUniqueValues().size})`}
          type='text'
          value={(columnFilterValue ?? '') as string}
        />
      </>
    )
}

export default Filter
