import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import HeaderLogo from '@/src/components/atoms/HeaderLogo/HeaderLogo'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import PopupCatalog from '@/src/components/DynamicLayout/PopupCatalog/PopupCatalog'
import PopupSupport from '@/src/components/DynamicLayout/PopupSupport/PopupSupport'
import PopupYourCity from '@/src/components/DynamicLayout/PopupYourCity/PopupYourCity'
import {
  IconArrowDown,
  IconBall,
  IconCart,
  IconCross,
  IconExit,
  IconEye,
  IconGears,
  IconGiftBox,
  IconGifts,
  IconGlare,
  IconHeart,
  IconHuman,
  IconLocation,
  IconLoupeStripes,
  IconMarathon,
  IconMessage,
  IconPhone,
  IconScales,
  IconSearch,
  IconShoppingCart,
  IconSmallLogo,
  IconThreeLanes,
  IconWhatsapp
} from '@/src/constants/icons'

import {
  moreArrayTypes,
  navLinkArrayTypes
} from './_types'
import {
  moreArray,
  navigationLinksText
} from './constants'
import styles from './PublicHeader.module.scss'

function PublicHeader () {
  // tODO: вынести все state в props убрать функционал на уровень выше
  /** состояние popup городов */
  const [isPopupCityOpen, setPopupCityOpen] = useState(false)
  /** состояние popup навигации */
  const [isPopupNavigationOpen, setPopupNavigationOpen] = useState(false)
  /** состояние popup каталог */
  const [isPopupCatalogOpen, setPopupCatalogOpen] = useState(false)
  /** состояние popup поддержки */
  const [isPopupSupportOpen, setPopupSupportOpen] = useState(false)
  /** состояние popup профиля */
  const [isPopupProfileOpen, setPopupProfileOpen] = useState(false)

  /** функция открытия popup городов */
  const openPopupCity = () => {
    setPopupCityOpen(!isPopupCityOpen)
  }

  /** функция открытия popup навигации */
  const openPopupNavigation = () => {
    setPopupNavigationOpen(!isPopupNavigationOpen)
  }

  /** функция открытия popup каталог */
  const openPopupCatalog = () => {
    setPopupCatalogOpen(!isPopupCatalogOpen)
  }

  return (
    <header className={styles.publicHeader}>
      <div className={styles.publicHeader__navigationBox}>
        <nav className={styles.navigation}>
          <div
            className={styles.navigation__btnCity}
            onClick={openPopupCity}
          >
            <IconWrapper
              IconComponent={IconLocation}
              iconClassname={styles.IconLocation}
            />
            <p className={styles.navigation__cityName}>
              Москва
            </p>
            <IconWrapper
              IconComponent={IconArrowDown}
              iconClassname={cn(
                styles.imgArrow,
                isPopupCityOpen ? styles.rotateArrow : ''
              )}
            />
            <PopupYourCity popupOpen={isPopupCityOpen} />
          </div>

          <ul className={styles.navigation__list}>
            {navigationLinksText.map((item: navLinkArrayTypes) => (
              <li key={item.id}>
                <Link
                  className={cn(styles.navigation__link, styles.hoverColor)}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              className={styles.navigation__moreBox}
              onClick={openPopupNavigation}
            >
              <p className={styles.navigation__more}>
                Ещё
              </p>
              <IconWrapper
                IconComponent={IconArrowDown}
                iconClassname={cn(
                  styles.imgArrow,
                  isPopupNavigationOpen ? styles.rotateArrow : ''
                )}
              />

              <div
                className={cn(
                  styles.navigation__popup,
                  styles.popup,
                  isPopupNavigationOpen
                    ? ''
                    : cn(styles.navigation__popup_close, styles.popup_close)
                )}
              >
                <ul className={styles.navigation__popupList}>
                  {moreArray.map((item: moreArrayTypes) => (
                    <li key={item.id}>
                      <Link
                        className={cn(
                          styles.navigation__item,
                          styles.hoverColor
                        )}
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}

                  <li className={styles.navigation__item}>
                    Письмо директору
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.publicHeader__container}>
        <div className={styles.mobBtnContainer}>
          <ButtonIcon
            className={styles.mobBtnContainer__btnDropDown}
            colorVariant='black'
            icon={IconThreeLanes}
            paddingVariant='wide'
            withIcon={true}
          />

          <ButtonIcon
            className={styles.mobBtnContainer__btnDropDown}
            colorVariant='black'
            icon={IconSearch}
            paddingVariant='wide'
            withIcon={true}
          />
        </div>

        <HeaderLogo
          srcImage={'/assets/logo-public-header.svg'}
          styleLogoImg={styles.publicHeader__logo}
        />

        <ButtonIcon
          className={cn(styles.publicHeader__catalog, styles.btnCatalog)}
          colorVariant='red'
          icon={isPopupCatalogOpen ? IconCross : IconThreeLanes}
          label='Каталог'
          onClick={openPopupCatalog}
          paddingVariant='wide'
          withIcon={true}
        />

        <PopupCatalog popupOpen={isPopupCatalogOpen} />

        <div className={styles.publicHeader__searchBox}>
          <input
            className={styles.publicHeader__search}
            placeholder='Найди свой Ямагучи'
            type='text'
          />
          <IconWrapper
            IconComponent={IconSearch}
            wrapperClassname={styles.publicHeader__searchIconWrapper}
          />
        </div>

        <Link
          className={cn(styles.btnGifts, styles.publicHeader__giftsBtn)}
          href='/'
        >
          <IconWrapper
            IconComponent={IconGiftBox}
            wrapperClassname={styles.btnGifts__imgBox}
          />

          <IconWrapper
            IconComponent={IconGlare}
            iconClassname={cn(styles.publicHeader__IconGlare)}
            wrapperClassname={cn(
              styles.btnGifts__imgGlareWrapper,
              styles.btnGifts__imgGlareWrapper_1
            )}
          />

          <IconWrapper
            IconComponent={IconGlare}
            iconClassname={cn(styles.publicHeader__IconGlare)}
            wrapperClassname={cn(
              styles.btnGifts__imgGlareWrapper,
              styles.btnGifts__imgGlareWrapper_2
            )}
          />
          <p className={styles.btnGifts__text}>
            Идеи подарков
          </p>
        </Link>

        <div className={styles.userPanel}>
          <button
            className={cn(
              styles.userPanel__btn,
              styles.userPanel__btn_whatsapp
            )}
            type='button'
          >
            <IconWrapper
              IconComponent={IconWhatsapp}
              wrapperClassname={cn(
                styles.userPanel__iconWrapper,
                styles.userPanel__iconWrapper_whatsapp
              )}
            />
          </button>

          <div
            className={styles.relativeBox}
            onMouseEnter={() => setPopupSupportOpen(true)}
            onMouseLeave={() => setPopupSupportOpen(false)}
          >
            <button
              className={cn(styles.userPanel__btn)}
              type='button'
            >
              <IconWrapper
                IconComponent={IconPhone}
                wrapperClassname={styles.userPanel__iconWrapper}
              />
            </button>

            <PopupSupport popupOpen={isPopupSupportOpen} />
          </div>

          {/* кнопка избранное  */}

          <button
            className={cn(styles.userPanel__btn)}
            type='button'
          >
            <IconWrapper
              IconComponent={IconHeart}
              wrapperClassname={styles.userPanel__iconWrapper}
            />
            <span className={cn(styles.userPanel__counter)}>
              2
            </span>
          </button>

          <button
            className={cn(styles.userPanel__btn)}
            type='button'
          >
            <IconWrapper
              IconComponent={IconCart}
              wrapperClassname={styles.userPanel__iconWrapper}
            />
            <span className={cn(styles.userPanel__counter)}>
              +99
            </span>
          </button>

          {/* кнопка профиль */}
          <div
            onMouseEnter={() => setPopupProfileOpen(true)}
            onMouseLeave={() => setPopupProfileOpen(false)}
          >
            <button
              className={cn(styles.userPanel__btn)}
              type='button'
            >
              <span className={cn(styles.userPanel__name)}>
                Г
              </span>
            </button>
            <div
              className={cn(
                styles.popupProfile,
                styles.popup,
                isPopupProfileOpen
                  ? ''
                  : cn(styles.popup_close, styles.popupProfile_close)
              )}
            >
              <div className={cn(styles.popupProfile__popupProfileWrapper)}>
                <h4
                  className={cn(
                    styles.popupProfile__text,
                    styles.popupProfile__text_weight
                  )}
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
                  <li className={styles.popupProfile__item}>
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

          {/* кнопка войти */}
          {/* <button className={cn(styles.userPanel__enter)}>
            <IconWrapper
              wrapperClassname={styles.userPanel__iconEnter}
              IconComponent={IconHuman}
            />
            Войти
          </button> */}
        </div>
      </div>

      <nav className={styles.mobileNav}>
        <ButtonIcon
          className={cn(styles.mobileNav__catalog, styles.btnCatalog)}
          colorVariant='red'
          icon={IconLoupeStripes}
          label='Каталог'
          paddingVariant='wide'
          withIcon={true}
        />

        <Link
          className={styles.publicHeader__popular}
          href='/'
        >
          <ButtonIcon
            className={styles.publicHeader__popularBtn}
            colorVariant='gray-matt-black'
            label='Популярное'
            paddingVariant='wide'
            withIcon={false}
          />
        </Link>

        <Link
          className={cn(styles.mobileNav__gifts, styles.btnGifts)}
          href='/'
        >
          <IconWrapper
            IconComponent={IconGiftBox}
            wrapperClassname={styles.btnGifts__imgBox}
          />

          <IconWrapper
            IconComponent={IconGlare}
            wrapperClassname={cn(
              styles.btnGifts__imgGlareWrapper,
              styles.btnGifts__imgGlareWrapper_1
            )}
          />

          <IconWrapper
            IconComponent={IconGlare}
            wrapperClassname={cn(
              styles.btnGifts__imgGlareWrapper,
              styles.btnGifts__imgGlareWrapper_2
            )}
          />
          <p className={styles.btnGifts__text}>
            Идеи подарков
          </p>
        </Link>
      </nav>
    </header>
  )
}

export default PublicHeader
