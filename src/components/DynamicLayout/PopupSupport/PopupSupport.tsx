import cn from 'classnames'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import {
  IconCameraMovie,
  IconFire,
  IconGears,
  IconPhonRotary
} from '@/src/constants/icons'

import { PopupSupportTypes } from './_types'
import styles from './PopupSupport.module.scss'

/** popup поддержки ,  в header */
const PopupSupport: React.FC<PopupSupportTypes> = ({ popupOpen }) => (

  <div
    className={cn(
      styles.popupSupport,
      popupOpen
        ? ''
        : styles.popupSupport_close
    )}
  >
    <div className={styles.popupSupport__wrapper}>
      <div
        className={cn(
          styles.popupSupport__box,
          styles.popupSupport__box_left
        )}
      >
        <div className={styles.popupSupport__titleBox}>
          <IconWrapper
            IconComponent={IconFire}
            wrapperClassname={styles.popupSupport__iconSupportWrapper}
          />
          <h4
            className={cn(
              styles.popupSupport__title,
              styles.popupSupport__title_support
            )}
          >
            Горячая линия
          </h4>
        </div>
        <div
          className={cn(
            styles.popupSupport__boxNumber,
            styles.popupSupport__boxNumber_top
          )}
        >
          <p className={styles.popupSupport__number}>
            8 800 333 12 81
          </p>
          <p className={styles.popupSupport__text}>
            по России
          </p>
        </div>
        <div
          className={cn(
            styles.popupSupport__boxNumber,
            styles.popupSupport__boxNumber_bottom
          )}
        >
          <p className={styles.popupSupport__number}>
            8 495 646 80 96
          </p>
          <p className={styles.popupSupport__text}>
            по Москве
          </p>
        </div>

        <p className={styles.popupSupport__subtitle}>
          круглосуточно
        </p>

        <ButtonIcon
          className={cn(
            styles.popupSupport__callBack,
            styles.popupSupport__popupBtn
          )}
          colorVariant='red'
          icon={IconPhonRotary}
          iconWrapperClassName={
            styles.popupSupport__callBackIconWrapper
          }
          label='Заказать звонок'
          paddingVariant='wide'
          withIcon={true}
        />

        {/* должно открывать форму заказа видеоконсультации */}

        <ButtonIcon
          className={cn(
            styles.popupSupport__videoConsultation,
            styles.popupSupport__popupBtn
          )}
          colorVariant='blackWhite'
          icon={IconCameraMovie}
          iconWrapperClassName={
            styles.popupSupport__videoConsultationIconWrapper
          }
          label='Видеоконсультация'
          paddingVariant='wide'
          withIcon={true}
        />

        {/* после мержа веток , вставить готовый компонент c link, из footer-а */}

        <p
          className={cn(
            styles.popupSupport__text,
            styles.popupSupport__text_underline
          )}
        >
          Адреса фирменных магазинов
        </p>
      </div>
      <div
        className={cn(
          styles.popupSupport__box,
          styles.popupSupport__box_right
        )}
      >
        <div className={styles.popupSupport__titleBox}>
          <IconWrapper
            IconComponent={IconGears}
            wrapperClassname={styles.popupSupport__iconCenterWrapper}
          />
          <h4
            className={cn(
              styles.popupSupport__title,
              styles.popupSupport__title_center
            )}
          >
            Сервис-центр
          </h4>
        </div>

        <p
          className={cn(
            styles.popupSupport__number,
            styles.popupSupport__number_white
          )}
        >
          8 800 550 59 34
        </p>

        <ul className={styles.popupSupport__listWorkingHours}>
          <li className={styles.popupSupport__itemWorkingHours}>
            <p
              className={cn(
                styles.popupSupport__itemText,
                styles.popupSupport__itemText_day
              )}
            >
              ПН
            </p>
            <p className={styles.popupSupport__itemText}>
              9:00 – 18:00
            </p>
          </li>
          <li className={styles.popupSupport__itemWorkingHours}>
            <p
              className={cn(
                styles.popupSupport__itemText,
                styles.popupSupport__itemText_day
              )}
            >
              ВТ
              {' '}
            </p>
            <p className={styles.popupSupport__itemText}>
              9:00 – 18:00
            </p>
          </li>
          <li className={styles.popupSupport__itemWorkingHours}>
            <p
              className={cn(
                styles.popupSupport__itemText,
                styles.popupSupport__itemText_day
              )}
            >
              СР
            </p>
            <p className={styles.popupSupport__itemText}>
              9:00 – 18:00
            </p>
          </li>
          <li className={styles.popupSupport__itemWorkingHours}>
            <p
              className={cn(
                styles.popupSupport__itemText,
                styles.popupSupport__itemText_day
              )}
            >
              ЧТ
            </p>
            <p className={styles.popupSupport__itemText}>
              9:00 – 18:00
            </p>
          </li>
          <li className={styles.popupSupport__itemWorkingHours}>
            <p
              className={cn(
                styles.popupSupport__itemText,
                styles.popupSupport__itemText_day
              )}
            >
              ПТ
            </p>
            <p className={styles.popupSupport__itemText}>
              9:00 – 18:00
            </p>
          </li>
          <li className={styles.popupSupport__itemWorkingHours}>
            <p
              className={cn(
                styles.popupSupport__itemText,
                styles.popupSupport__itemText_day
              )}
            >
              СБ
            </p>
            <p className={styles.popupSupport__itemText}>
              9:00 –
              {' '}
              <span className={styles.popupSupport__itemText_weight}>
                {' '}
                17:00
              </span>
            </p>
          </li>
          <li className={styles.popupSupport__itemWorkingHours}>
            <p
              className={cn(
                styles.popupSupport__itemText,
                styles.popupSupport__itemText_day
              )}
            >
              ВС
            </p>
            <p className={styles.popupSupport__itemText}>
              9:00 –
              {' '}
              <span className={styles.popupSupport__itemText_weight}>
                {' '}
                17:00
                {' '}
              </span>
            </p>
          </li>
        </ul>

        <p
          className={cn(
            styles.popupSupport__text,
            styles.popupSupport__text_underline,
            styles.popupSupport__text_white
          )}
        >
          Подробнее о работе сервисного цента и Trade-In
        </p>
      </div>
    </div>
  </div>
)

export default PopupSupport
