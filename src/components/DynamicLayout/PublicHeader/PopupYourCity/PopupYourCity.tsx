import cn from 'classnames'
import { memo } from 'react'

import { arrayCity } from '@/src/constants/arrayListCitiesHeader'

import styles from './PopupYourCity.module.scss'

/** popup списка городов, в header */
const PopupYourCity = (): JSX.Element => (
  <div
    className={cn(
      styles.popupYourCity
      // popupOpen
      //   ? ''
      //   : cn(styles.popupYourCity_close)
    )}
  >
    <div
      className={cn(styles.popupYourCity__dropDown, styles.dropDawnList)}
    >
      <input
        className={cn(styles.popupYourCity__input, styles.dropDawnList)}
        type='text'
      />
      {/* tODO: добавить dropDawn , стилизовать input */}
    </div>

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
)

export default memo(PopupYourCity)
