import { useToggle } from '@reactuses/core'
import cn from 'classnames'
import Link from 'next/link'
import { memo, useCallback, useEffect, useRef } from 'react'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import {
  IconArrowDown
} from '@/src/constants/icons'
import { moreArray } from '@/src/constants/listMorePopup'

import { moreArrayTypes } from './_types'
import styles from './PopupMore.module.scss'

/** popup Ещё, в header */
const PopupMore = (): JSX.Element => {
  /** состояние popup навигации */
  const [showPopupNavigation, toggleShowPopupNavigation] = useToggle(false)
  /** popupMoreRef */
  const popupMoreRef = useRef<HTMLDivElement>(null)

  /** функция для клика вне модального окна */
  const handleClickOutside = useCallback((e) => {
    if (popupMoreRef.current && !popupMoreRef.current.contains(e.target)) {
      toggleShowPopupNavigation(false)
    }
  }, [toggleShowPopupNavigation])

  useEffect(() => {
    if (showPopupNavigation) {
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [toggleShowPopupNavigation, showPopupNavigation, handleClickOutside])

  return (
    <div ref={popupMoreRef}>
      <div
        className={styles.moreBtn}
        onClick={toggleShowPopupNavigation}
      >
        <p className={styles.moreBtn__text}>
          Ещё
        </p>
        <IconWrapper
          IconComponent={IconArrowDown}
          iconClassname={showPopupNavigation && styles.rotateArrow}
        />
      </div>

      <div
        className={cn(styles.popupMore, !showPopupNavigation && styles.popupMore_close)}
      >
        <ul className={styles.popupMore__list}>
          {moreArray.map((item: moreArrayTypes) => (
            <Link
              className={
                styles.popupMore__item
              }
              href={item.href}
              key={item.id}
            >
              {item.name}
            </Link>
          ))}

          <li className={styles.popupMore__item}>
            Письмо директору
          </li>
        </ul>
      </div>
    </div>
  )
}

export default memo(PopupMore)
