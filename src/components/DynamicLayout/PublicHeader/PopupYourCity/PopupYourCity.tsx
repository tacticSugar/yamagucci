import { useToggle } from '@reactuses/core'
import cn from 'classnames'
import { memo, useCallback, useEffect, useRef } from 'react'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { arrayCity } from '@/src/constants/arrayListCitiesHeader'
import {
  IconArrowDown,
  IconLocation
} from '@/src/constants/icons'

import styles from './PopupYourCity.module.scss'

/** popup списка городов, в header */
const PopupYourCity = (): JSX.Element => {
  /** состояние popup городов */
  const [showPopupCity, toggleShowPopupCity] = useToggle(false)
  /** popupCityRef */
  const popupCityRef = useRef<HTMLDivElement>(null)

  /** функция для клика вне модального окна */
  const handleClickOutside = useCallback((e) => {
    if (popupCityRef.current && !popupCityRef.current.contains(e.target)) {
      toggleShowPopupCity(false)
    }
  }, [toggleShowPopupCity])

  useEffect(() => {
    if (showPopupCity) {
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [toggleShowPopupCity, showPopupCity, handleClickOutside])

  return (
    <div
      ref={popupCityRef}
    >
      <div
        className={styles.btnCity}
        onClick={toggleShowPopupCity}
      >
        <IconWrapper IconComponent={IconLocation} />
        <p className={styles.btnCity__cityName}>
          Москва
        </p>
        <IconWrapper
          IconComponent={IconArrowDown}
          iconClassname={cn(styles.btnCity__imgArrow, showPopupCity && styles.rotateArrow)}
        />
      </div>

      <div className={cn(styles.popupYourCity, !showPopupCity && styles.popupYourCity_close)}>
        <input
          className={styles.popupYourCity__input}
          placeholder='Ваш город'
          type='text'
        />
        <ul className={styles.popupYourCity__list}>
          {arrayCity.map((item: string, index: number) => (
            <li
              className={styles.popupYourCity__item}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default memo(PopupYourCity)
