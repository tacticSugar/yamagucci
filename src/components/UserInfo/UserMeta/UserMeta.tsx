/* eslint-disable camelcase */
import { FC, memo } from 'react'

import { UserMetaTypes } from './_types'
import styles from './UserMeta.module.scss'

/** аватарка пользователя */
const UserMeta: FC<UserMetaTypes> = ({ first_name, role }) => (

  <div className={styles.wrapper}>
    <p>
      {first_name}
    </p>
    <p>
      {role}
    </p>
  </div>

)

export default memo(UserMeta)
