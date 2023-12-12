/* eslint-disable indent */
import { flexRender } from '@tanstack/react-table'
import IconSortColumn from 'public/assets/icons/sortColumn.svg'
import type { FC } from 'react'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { TableMarkupTypes } from '@/src/components/TableWithModal/_types'
import Filter from '@/src/components/TableWithModal/Filter/Filter'

import styles from './TableMarkup.module.scss'

/** разметка таблицы */
const TableMarkup: FC<TableMarkupTypes> = ({ table }) => (
  <table className='table'>
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th
              colSpan={header.colSpan}
              key={header.id}
            >
              <div
                {...{
                  className: header.column.getCanSort()
                    ? styles.canSort
                    : '',
                  onClick: header.column.getToggleSortingHandler()
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {{
                  asc: <IconWrapper
                    IconComponent={IconSortColumn}
                    iconClassname={styles.iconAsc}
                       />,
                  desc: <IconWrapper
                    IconComponent={IconSortColumn}
                    iconClassname={styles.iconDesc}
                        />
                }[header.column.getIsSorted() as string] ?? null}
              </div>
              {header.column.getCanFilter()
                ? (
                  <div>
                    <Filter
                      column={header.column}
                      table={table}
                    />
                  </div>
                )
                : null}
            </th>
          )
          )}
        </tr>
      ))}
    </thead>
    <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id}>
          {row.getVisibleCells().map(cell => (
            <td key={cell.id}>
              {flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

export default TableMarkup
