import { useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { type FC, HTMLAttributes, PropsWithChildren, useCallback } from 'react'

import { COOKIES } from '@/src/constants/constants'

import AdminHeader from './AdminHeader/AdminHeader'
import PublicHeader from '../PublicHeader/PublicHeader'
import AdminNavigation from './AdminNavigation/AdminNavigation'
import styles from './DynamicLayout.module.scss'

/** компонент динамического лейаута */
const DynamicLayout: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children }) => {
  /** урл */
  const router = useRouter()
  /** queryClient */
  const queryClient = useQueryClient()
  /** ф-я выхода пользователя и очистки кэша */
  const handleLoginLogout = useCallback(() => {
    queryClient.clear()
    Cookies.remove(COOKIES.AUTH_TOKEN)
    router.reload()
  }, [queryClient, router])

  /** проверка на админку */
  const isAdmin = router?.pathname?.includes('admin')

  return (
    <>
      {isAdmin
        ? (
          <div className={styles.adminLayout}>
            <AdminHeader handleLoginLogout={handleLoginLogout} />
            <AdminNavigation />
            {children}
          </div>
        )
        : (
          <div className={styles.publicLayout}>
            <PublicHeader />
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
