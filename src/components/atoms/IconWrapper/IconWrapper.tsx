import cn from 'classnames'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { IconWrapperTypes } from './_types'
import styles from './IconWrapper.module.scss'

/** компонент обертки для всех иконок: локальных и с бэка */
const IconWrapper: FC<IconWrapperTypes> = ({ IconComponent, iconClassname, onClick, wrapperClassname }) => {
  /** проверка на функцию */
  const isFunction = typeof IconComponent === 'function'

  if (!isFunction) return null

  return (
    <motion.div
      className={cn(styles.wrapper, wrapperClassname)}
      layout
      onClick={onClick}
    >
      <IconComponent className={cn(iconClassname || styles.icon)} />
    </motion.div>
  )
}

export default IconWrapper
