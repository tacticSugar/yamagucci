import { useToggle } from '@reactuses/core'
// eslint-disable-next-line import/named
import { ColumnFiltersState, ExpandedState, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import IconGear from 'public/assets/icons/gear.svg'
import IconPlus from 'public/assets/icons/plus.svg'
import React, { FC, useState } from 'react'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import ModalWrapper from '@/src/components/atoms/ModalWrapper/ModalWrapper'

import { TableWithModalTypes } from './_types'
import ColumnsVisibilitySwitcher from './ColumnsVisibilitySwitcher/ColumnsVisibilitySwitcher'
import DebouncedInput from './DebouncedInput/DebouncedInput'
import { fuzzyFilter } from './helpers/fuzzyFilter'
import Pagination from './Pagination/Pagination'
import CheckboxFiltersModal from './StatusFilterModal/CheckboxFiltersModal'
import SubcategoriesFilters from './SubcategoriesFiltersModal/SubcategoriesFiltersModal'
import TableMarkup from './TableMarkup/TableMarkup'
import styles from './TableWithModal.module.scss'

/** страница списка товаров */
const Table: FC<TableWithModalTypes> = ({ columns: defaultColumns, data: defaultData, title, withCheckboxFilters, withSubcategoriesFilters }) => {
  /** состояние модалки */
  const [isModalIsOpen, toggleModal] = useToggle(false)
  /** стейт таблицы */
  const [data] = useState(() => [...defaultData.data])

  /** стейт раскрытия подкатегорий */
  const [expanded, setExpanded] = useState<ExpandedState>({})

  /** стейт раскрытия подкатегорий */
  const [enableExpanding, toggleEnableExpanding] = useToggle(true)

  /** стейт колонок */
  const [columns] = useState<typeof defaultColumns>(() => [
    ...defaultColumns
  ])
  /** стейт видимости колонок */
  const [columnVisibility, setColumnVisibility] = useState({ status: false })

  /** фильтры колонок */
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )

  /** глобальный фильтр */
  const [globalFilter, setGlobalFilter] = useState('')

  /** задает таблицу через tanstack */
  const table = useReactTable({
    columns,
    data,
    debugColumns: false,
    debugHeaders: true,
    debugTable: true,
    enableExpanding,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    filterFromLeafRows: true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getSubRows: row => row.subcategories,
    globalFilterFn: fuzzyFilter,
    initialState: { pagination: { pageSize: 20 } },
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onExpandedChange: setExpanded,
    onGlobalFilterChange: setGlobalFilter,
    paginateExpandedRows: false,
    state: {
      columnFilters,
      columnVisibility,
      expanded,
      globalFilter
    }
  })

  /** обработчик сброса фильтров и поиска */
  const handleOnResetButton = () => {
    setColumnFilters([])
    setGlobalFilter('')
    setExpanded({})
  }

  return (
    <div className={styles.wrapper}>
      <ModalWrapper
        className={styles.modal}
        contentClassName={styles.contentClassName}
        handleClose={toggleModal}
        isOpen={isModalIsOpen}
        overlayClassName={styles.overlay}
        title='Настройка отображения списка товаров'
        variantAnimation='toLeft'
      >
        <ColumnsVisibilitySwitcher table={table} />
        {withSubcategoriesFilters && (
          <SubcategoriesFilters
            table={table}
            toggleEnableExpanding={toggleEnableExpanding}
          />
        )}
        {withCheckboxFilters && (
          <CheckboxFiltersModal
            columnFilters={columnFilters}
            columnId='status'
            setColumnFilters={setColumnFilters}
            table={table}
            title='Товары в каком статусе показывать'
          />
        )}
        <div className={styles.buttonGroup}>
          <ButtonIcon
            colorVariant='blue'
            label='Применить'
            onClick={toggleModal}
            paddingVariant='wide'
            withIcon={false}
          />
          <ButtonIcon
            colorVariant='gray'
            label='Отмена'
            onClick={toggleModal}
            paddingVariant='wide'
            withIcon={false}
          />
        </div>
      </ModalWrapper>
      <h1 className={styles.header}>
        {title}
      </h1>
      <div className={styles.searchAllWrapper}>
        <DebouncedInput
          className={styles.searchAll}
          onChange={value => setGlobalFilter(String(value))}
          placeholder='Поиск по таблице...'
          value={globalFilter ?? ''}
        />
        <div
          className={styles.deleteFilters}
          onClick={handleOnResetButton}
        >
          Сбросить все фильтры
        </div>
        <div className={styles.headerBtns}>
          <ButtonIcon
            className={styles.newProductBtn}
            colorVariant='transparentBlue'
            icon={IconPlus}
            label='добавить'
            paddingVariant='slim'
            withIcon={true}
          />
          <IconWrapper
            IconComponent={IconGear}
            onClick={toggleModal}
            wrapperClassname={styles.iconGear}
          />
        </div>
      </div>
      <TableMarkup table={table} />
      <Pagination table={table} />
      {/* <pre>
        {JSON.stringify(table.getState(), null, 2)}
      </pre> */}
    </div>
  )
}

export default React.memo(Table)
