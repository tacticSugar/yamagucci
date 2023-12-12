import type { FC } from 'react'

import { PaginationTypes } from '@/src/components/TableWithModal/_types'

import styles from './Pagination.module.scss'

/** пагинация */
const Pagination: FC<PaginationTypes> = ({ table }) => (
  <>
    <div className={styles.paginationWrapper}>
      <button
        className={styles.paginationButton}
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.setPageIndex(0)}
        type='button'
      >
        {'<<'}
      </button>
      <button
        className={styles.paginationButton}
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
        type='button'
      >
        {'<'}
      </button>
      <button
        className={styles.paginationButton}
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
        type='button'
      >
        {'>'}
      </button>
      <button
        className={styles.paginationButton}
        disabled={!table.getCanNextPage()}
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        type='button'
      >
        {'>>'}
      </button>
      <span className={styles.pageNumberInfo}>
        <div>
          Страница
        </div>
        <span>
          {' '}
          {table.getState().pagination.pageIndex + 1}
          {' '}
        </span>
        <span>
          из
        </span>
        <span>
          {table.getPageCount()}
        </span>
      </span>
      <span className={styles.goToPageWrapper}>
        | Перейти к странице:
        <input
          className={styles.goToPageInput}
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={e => {
          /** страница */
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            table.setPageIndex(page)
          }}
          type='number'
        />
      </span>
      <select
        onChange={e => {
          table.setPageSize(Number(e.target.value))
        }}
        value={table.getState().pagination.pageSize}
      >
        {[10, 20, 30, 40, 50, 100].map(pageSize => (
          <option
            key={pageSize}
            value={pageSize}
          >
            Показать по
            {' '}
            {pageSize}
          </option>
        ))}
      </select>
    </div>
    <div>
      Всего:
      {' '}
      {table.getPrePaginationRowModel().rows.length}
      {' '}
      позиций
    </div>
  </>
)

export default Pagination
