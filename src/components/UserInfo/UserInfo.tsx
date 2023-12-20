import { memo } from 'react'

import useFetchUser from '@/src/api/useFetchUser/useFetchUser'

import UserAvatar from './UserAvatar/UserAvatar'
import styles from './UserInfo.module.scss'
import UserMeta from './UserMeta/UserMeta'

/** аватарка пользователя */
const UserInfo: React.FC = () => {
  /** получаем данные пользователя */
  const { data: user } = useFetchUser({})

  return (
    user?.first_name && (
      <div className={styles.wrapper}>
        <UserAvatar />
        <UserMeta {...user} />
      </div>
    )
  )
}

export default memo(UserInfo)
