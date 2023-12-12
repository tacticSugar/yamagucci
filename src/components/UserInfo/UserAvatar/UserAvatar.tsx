import cn from 'classnames'
import { memo } from 'react'

import LoaderQuery from '@/src/components/atoms/LoaderQuery/LoaderQuery'

import styles from './UserAvatar.module.scss'

type UserAvatarTypes = {
  /** класс на див картинки */
  className?: string
  /** ссылка на картинку */
  imageLink?: string
  /** состояние загрузки */
  isLoading?: boolean
}

/** аватарка пользователя */
const UserAvatar: React.FC<UserAvatarTypes> = ({
  className,
  imageLink,
  isLoading
}) => (
  <LoaderQuery
    className={cn(
      styles.wrapper,
      className
    )}
    isLoading={isLoading}
  >
    <div
      className={cn(
        styles.wrapper,
        className
      )}
      {...Object.assign({},
        imageLink
          ? {
            style: {
              backgroundImage: `url("${imageLink}")`
            }
          }
          : {
            style: {
              backgroundImage: 'url(https://placehold.jp/150x150.png)'
            }
          })}
    />
  </LoaderQuery>
)

export default memo(UserAvatar)
