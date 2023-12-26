import { useToggle } from '@reactuses/core'
import cn from 'classnames'
import Link from 'next/link'
import { FC, memo } from 'react'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { PopupProfileTypes } from '@/src/components/DynamicLayout/PublicHeader/_types'
import {
  IconBall,
  IconExit,
  IconEye,
  IconGears,
  IconGifts,
  IconHeart,
  IconHuman,
  IconMarathon,
  IconMessage,
  IconScales, IconShoppingCart,
  IconSmallLogo
} from '@/src/constants/icons'

import styles from './PopupProfile.module.scss'

/** popup профиля, в header */
const PopupProfile: FC<PopupProfileTypes> = ({ handleLogout }): JSX.Element => {
  /** состояние popup профиля */
  const [showPopupProfile, toggleShowPopupProfile] = useToggle(false)

  return (
  // tODO: добавить counter подарков, сравнение избранное
    <div
      onMouseEnter={() => toggleShowPopupProfile(true)}
      onMouseLeave={() => toggleShowPopupProfile(false)}
    >
      <button
        className={styles.btnProfile}
        type='button'
      >
        <span className={styles.btnProfile__name}>
          Г
        </span>
      </button>

      <div
        className={cn(styles.popupProfile, !showPopupProfile && styles.popupProfile_close)}
      >
        <div className={styles.popupProfile__popupProfileWrapper}>
          <h4
            className={cn(styles.popupProfile__text, styles.popupProfile__text_weight)}
          >
            Uewrwer
          </h4>
          <p
            className={cn(
              styles.popupProfile__text,
              styles.popupProfile__text_phone,
              styles.popupProfile__text_color
            )}
          >
            +7 342 324 23 32
          </p>
          <ul className={styles.popupProfile__list}>
            <Link
              className={styles.popupProfile__link}
              href='/'
            >
              <li className={styles.popupProfile__item}>
                <IconWrapper
                  IconComponent={IconSmallLogo}
                  wrapperClassname={cn(styles.popupProfile__iconWrapper, styles.popupProfile__iconWrapper_logo)}
                />
                <p className={styles.popupProfile__text}>
                  Бонусы
                </p>

                <div className={styles.popupProfile__ballBox}>
                  <p className={styles.popupProfile__ballQuantity}>
                    100
                  </p>
                  <IconWrapper
                    IconComponent={IconBall}
                    wrapperClassname={styles.popupProfile__ballIcon}
                  />
                </div>
              </li>
            </Link>
          </ul>
          <ul className={styles.popupProfile__list} >
            <li className={styles.popupProfile__item}>
              <IconWrapper
                IconComponent={IconMarathon}
                wrapperClassname={cn(styles.popupProfile__iconWrapper)}
              />
              <p className={styles.popupProfile__text} >
                Марафон
              </p>
            </li>
          </ul>

          <ul className={styles.popupProfile__list}>
            <li className={styles.popupProfile__item}>
              <IconWrapper
                IconComponent={IconShoppingCart}
                wrapperClassname={cn(styles.popupProfile__iconWrapper)}
              />
              <p className={styles.popupProfile__text}>
                Заказы
              </p>
            </li>
            <li className={styles.popupProfile__item}>
              <IconWrapper
                IconComponent={IconHeart}
                wrapperClassname={cn(styles.popupProfile__iconWrapper)}
              />
              <p className={styles.popupProfile__text}>
                Избранное
              </p>
            </li>
            <li className={styles.popupProfile__item}>
              <IconWrapper
                IconComponent={IconEye}
                wrapperClassname={cn(styles.popupProfile__iconWrapper)}
              />
              <p className={styles.popupProfile__text}>
                Вы смотрели
              </p>
            </li>
            <li className={styles.popupProfile__item}>
              <IconWrapper
                IconComponent={IconScales}
                wrapperClassname={cn(styles.popupProfile__iconWrapper)}
              />
              <p className={styles.popupProfile__text}>
                Сравнение
              </p>
            </li>
            <li className={styles.popupProfile__item}>
              <IconWrapper
                IconComponent={IconGifts}
                wrapperClassname={cn(styles.popupProfile__iconWrapper)}
              />
              <p className={styles.popupProfile__text}>
                Подарки
              </p>
            </li>
            <li className={styles.popupProfile__item}>
              <IconWrapper
                IconComponent={IconMessage}
                wrapperClassname={cn(styles.popupProfile__iconWrapper)}
              />
              <p className={styles.popupProfile__text}>
                Чат с поддержкой
              </p>
            </li>
          </ul>

          <ul className={styles.popupProfile__list}>
            <li className={styles.popupProfile__item}>
              <IconWrapper
                IconComponent={IconHuman}
                wrapperClassname={styles.popupProfile__iconWrapper}
              />
              <p className={styles.popupProfile__text} >
                Профиль
              </p>
            </li>
            <li className={styles.popupProfile__item}>
              <IconWrapper
                IconComponent={IconGears}
                wrapperClassname={styles.popupProfile__iconWrapper}
              />
              <p className={styles.popupProfile__text} >
                Сервис
              </p>
            </li>
            <li
              className={styles.popupProfile__item}
              onClick={handleLogout}
            >
              <IconWrapper
                IconComponent={IconExit}
                wrapperClassname={styles.popupProfile__iconWrapper}
              />
              <p className={cn(styles.popupProfile__text, styles.popupProfile__text_color)} >
                Выйти
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default memo(PopupProfile)
