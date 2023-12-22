import cn from 'classnames'

import { PopupYourCityTypes } from './_types'
import { arrayCity } from './constants'
import styles from './PopupYourCity.module.scss'

/** popup списка городов, в header */
const PopupYourCity: React.FC<PopupYourCityTypes> = ({ popupOpen }) => (
  <div
    className={cn(
      styles.popupYourCity,
      popupOpen
        ? ''
        : cn(styles.popupYourCity_close)
    )}
  >
    <div
      className={cn(styles.popupYourCity__dropDown, styles.dropDawnList)}
    >
      <input
        className={cn(styles.popupYourCity__input, styles.dropDawnList)}
        type='text'
      />
      <ul>
        <li>
          gh
        </li>
      </ul>
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

export default PopupYourCity
