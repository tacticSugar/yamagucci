import { useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { type FC, HTMLAttributes, PropsWithChildren, useCallback } from 'react'

import PublicHeader from '@/src/components/DynamicLayout/PublicHeader/PublicHeader'
import { COOKIES } from '@/src/constants/constants'

import { DynamicLayoutTypes } from './_types'
import AdminHeader from './AdminHeader/AdminHeader'
import AdminNavigation from './AdminNavigation/AdminNavigation'
import styles from './DynamicLayout.module.scss'

/** компонент динамического лейаута */
const DynamicLayout: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>> & DynamicLayoutTypes> = ({ children, isAdminRoute }) => {
  /** queryClient */
  const queryClient = useQueryClient()
  /** ф-я выхода пользователя и очистки кэша */
  const handleLogout = useCallback(() => {
    queryClient.clear()
    Cookies.remove(COOKIES.AUTH_TOKEN)
    Router.reload()
  }, [queryClient])

  /** проверка на админку */
  return (
    <>
      {isAdminRoute
        ? (
          <div className={styles.adminLayout}>
            <AdminHeader handleLogout={handleLogout} />
            <AdminNavigation />
            {children}
          </div>
        )
        : (
          <div className={styles.publicLayout}>
            <PublicHeader handleLogout={handleLogout} />
            {children}
            <footer>
              FOOTER
            </footer>
          </div>
        )}
    </>
  )
}

export default DynamicLayout
