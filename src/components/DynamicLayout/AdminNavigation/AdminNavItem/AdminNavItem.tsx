import cn from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useState } from 'react'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { AdminNavItemTypes, SubNavItemTypes } from '@/src/components/DynamicLayout/AdminNavigation/_types'
import { IconArrowDown } from '@/src/constants/icons'

import styles from './AdminNavItem.module.scss'

/** варианты анимации сабменю */
const variants = {
  closed: { display: 'none', x: '-100%' },
  open: { display: 'block', x: 0 }
}

/** элемент поднавигации */
const SubNavItem: FC<SubNavItemTypes> = ({ href, icon, id, title }) => (
  <li key={id}>
    <Link
      className={cn(styles.item, styles.item__subItem)}
      href={href || '#'}
    >
      <IconWrapper IconComponent={icon} />
      <span className={styles.item__title}>
        {title}
      </span>
    </Link>
  </li>
)

/** элемент навигации */
const AdminNavItem: FC<AdminNavItemTypes> = ({ href, icon, id, submenu, title }) => {
  /** стейт сабменю */
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  /** тогглер сабменю */
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen)
  }

  return (
    <li key={id}>
      {submenu
        ? (
          <>
            <div
              className={styles.item}
              onClick={toggleSubmenu}
            >
              <IconWrapper IconComponent={icon} />
              <span className={styles.item__title}>
                {title}
              </span>
              <IconWrapper
                IconComponent={IconArrowDown}
                iconClassname={cn(styles.item__chevron, isSubmenuOpen && styles.item__chevron_open) }
              />
            </div>
            <motion.ul
              animate={isSubmenuOpen ? 'open' : 'closed'}
              transition={{ duration: 0.25, ease: 'easeOut', type: 'spring' }}
              variants={variants}
            >
              {submenu?.map((subItem) => (
                <SubNavItem
                  key={subItem?.id}
                  {...subItem}
                />
              ))}
            </motion.ul>
          </>
        )
        : (
          <Link
            className={styles.item}
            href={href || '#'}
          >
            <IconWrapper
              IconComponent={icon}
              iconClassname={styles.iconClassname}
            />
            <span className={styles.item__title}>
              {title}
            </span>
          </Link>
        )}
    </li>
  )
}

export default AdminNavItem
