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
    <div className={styles.relativeBox}>
      <li
        className={styles.moreBtn}
        onClick={() => toggleShowPopupNavigation()}
      >
        <p className={styles.moreBtn__text}>
          Ещё
        </p>
        <IconWrapper
          IconComponent={IconArrowDown}
          iconClassname={cn(
            styles.moreBtn__icon,
            showPopupNavigation ? styles.rotateArrow : ''
          )}
        />
      </li>

      <div
        className={cn(
          styles.popupMore,
          showPopupNavigation ? '' : styles.popupMore_close
        )}
        ref={popupMoreRef}
      >
        <ul className={styles.popupMore__list}>
          {moreArray.map((item: moreArrayTypes) => (
            <li key={item.id}>
              <Link
                className={
                  styles.popupMore__item
                }
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
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
