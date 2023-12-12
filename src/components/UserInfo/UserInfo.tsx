import { memo } from 'react'

import UserAvatar from './UserAvatar/UserAvatar'
import styles from './UserInfo.module.scss'
import UserMeta from './UserMeta/UserMeta'

/** аватарка пользователя */
const UserInfo: React.FC = () => (

  <div className={styles.wrapper}>
    <UserAvatar />
    <UserMeta />
  </div>

)

export default memo(UserInfo)
