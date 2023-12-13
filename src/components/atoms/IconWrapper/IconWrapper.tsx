import cn from 'classnames'
import { FC } from 'react'

import { IconWrapperTypes } from './_types'
import styles from './IconWrapper.module.scss'

/** компонент обертки для всех иконок: локальных и с бэка */
const IconWrapper: FC<IconWrapperTypes> = ({ IconComponent, iconClassname, onClick, wrapperClassname }) => {
  /** проверка на функцию */
  const isFunction = typeof IconComponent === 'function'

  if (!isFunction) return null

  return (
    <div
      className={cn(styles.wrapper, wrapperClassname)}
      onClick={onClick}
    >
      <IconComponent className={cn(iconClassname || styles.icon)} />
    </div>
  )
}

export default IconWrapper
