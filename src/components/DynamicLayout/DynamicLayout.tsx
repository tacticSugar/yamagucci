import { useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { type FC, HTMLAttributes, PropsWithChildren, useCallback } from 'react'

import { COOKIES } from '@/src/constants/constants'

import { DynamicLayoutTypes } from './_types'
import AdminHeader from './AdminHeader/AdminHeader'
import AdminNavigation from './AdminNavigation/AdminNavigation'
import AppFooter from './BannerApp/BannerApp'
import styles from './DynamicLayout.module.scss'
import PublicFooter from './PublicFooter/PublicFooter'

/** компонент динамического лейаута */
const DynamicLayout: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>> & DynamicLayoutTypes> = ({ children, isAdminRoute }) => {
  /** queryClient */
  const queryClient = useQueryClient()
  /** ф-я выхода пользователя и очистки кэша */
  const handleLoginLogout = useCallback(() => {
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
            <AdminHeader handleLoginLogout={handleLoginLogout} />
            <AdminNavigation />
            {children}
          </div>
        )
        : (
          <div className={styles.publicLayout}>
            <header>
              HEADER
            </header>
            {children}
            <footer>
              <AppFooter />
              <PublicFooter />
            </footer>
          </div>
        )}
    </>
  )
}

export default DynamicLayout
