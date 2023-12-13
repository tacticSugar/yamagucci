// eslint-disable-next-line import/named
import { ColumnDef } from '@tanstack/react-table'
import Link from 'next/link'
import React from 'react'

import useFetchProducts from '@/src/api/useFetchProducts/useFetchProducts'
import CustomTooltip from '@/src/components/atoms/CustomTooltip/CustomTooltip'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import LoaderQuery from '@/src/components/atoms/LoaderQuery/LoaderQuery'
import { ColumnResultProducts } from '@/src/components/TableWithModal/_types'
import TableWithModal from '@/src/components/TableWithModal/TableWithModal'
import { PAGE_PRODUCTS } from '@/src/constants/constants'
import { IconExternalLink, IconPen, IconSearch } from '@/src/constants/icons'
import times from '@/src/lib/times'

import styles from './ProductsPage.module.scss'

/** страница тестовая */
const ProductPage = () => {
  /** получаем все продукты */
  const { data, isLoading } = useFetchProducts()

  /** колонки хэдера и футера */
  const columns = React.useMemo<ColumnDef<ColumnResultProducts, any>[]>(
    () => [
      {
        accessorKey: 'id',
        cell: info => (
          <span className={styles.column__id}>
            <span>
              {info?.row?.original?.id}
            </span>
            <a
              href={info?.row?.original?.site_url}
              title='На сайт'
            >
              <IconWrapper IconComponent={IconExternalLink} />
            </a>
          </span>
        ),
        enableColumnFilter: false,
        header: 'Айди (ID)',
        id: 'id'
      },
      {
        accessorKey: 'model',
        header: '',
        id: 'model'
      },
      {
        accessorKey: 'search_keywords',
        cell: info => (
          <CustomTooltip
            content={info?.row?.original?.search_keywords}
            id={'search_keywords'}
            title='Поисковые теги'
          >
            <IconWrapper IconComponent={IconSearch} />
          </CustomTooltip>
        ),
        enableColumnFilter: false,
        header: '',
        id: 'search_keywords'
      },
      {
        accessorKey: 'category',
        header: '',
        id: 'category'
      },
      {
        accessorKey: 'brand',
        header: '',
        id: 'brand'
      },
      {
        accessorKey: 'price',
        enableColumnFilter: false,
        header: 'Цена',
        id: 'price'
      },
      {
        accessorKey: 'qnt',
        cell: info => (
          <span style={{ backgroundColor: info?.row?.original?.qnt?.color, borderRadius: '4px', padding: '5px 10px' }}>
            {info?.row?.original?.qnt?.text}
          </span>
        ),
        enableColumnFilter: false,
        enableSorting: false,
        header: 'Кол-во (МСК)',
        id: 'qnt'
      },
      {
        accessorKey: 'popularity',
        enableColumnFilter: false,
        header: 'Поп.',
        id: 'popularity'
      },
      {
        cell: info => (
          <Link
            href={`${PAGE_PRODUCTS}/${info?.row?.original?.id}`}
            title='Редактировать'
          >
            <IconWrapper IconComponent={IconPen} />
          </Link>
        ),
        enableColumnFilter: false,
        header: '',
        id: 'edit'
      },
      {
        accessorKey: 'status',
        header: '',
        id: 'status'
      }
    ],
    []
  )

  return (
    <>
      {isLoading
        ? times(4)?.map((x, key) => (
          <LoaderQuery
            className={styles.loader}
            isLoading={isLoading}
            key={key}
          />
        ))
        : (
          <TableWithModal
            columns={columns}
            data={data}
            title='Товары'
            withCheckboxFilters={true}
          />
        )}
    </>
  )
}

export default React.memo(ProductPage)
