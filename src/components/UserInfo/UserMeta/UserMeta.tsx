import { FC, memo } from 'react'

import styles from './UserMeta.module.scss'

/** аватарка пользователя */
const UserMeta: FC = () => (

  <div className={styles.wrapper}>
    <p>
      UserName
    </p>
    <p>
      UserRole
    </p>
  </div>

)

export default memo(UserMeta)
