import { useToggle } from '@reactuses/core'
import cn from 'classnames'
import Link from 'next/link'
import { FC, memo } from 'react'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import HeaderLogo from '@/src/components/atoms/HeaderLogo/HeaderLogo'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import PopupCatalog from '@/src/components/DynamicLayout/PublicHeader/PopupCatalog/PopupCatalog'
import PopupSupport from '@/src/components/DynamicLayout/PublicHeader/PopupSupport/PopupSupport'
import PopupYourCity from '@/src/components/DynamicLayout/PublicHeader/PopupYourCity/PopupYourCity'
import { navigationLinks } from '@/src/constants/header'
import {
  IconArrowDown,
  IconCart,
  IconCross,
  IconGiftBox,
  IconGlare,
  IconHeart,
  IconLocation,
  IconLoupeStripes,
  IconPhone,
  IconSearch,
  IconThreeLanes,
  IconWhatsapp
} from '@/src/constants/icons'

import {
  NavLinkArrayTypes, PublicHeaderTypes
} from './_types'
import PopupMore from './PopupMore/PopupMore'
import PopupProfile from './PopupProfile/PopupProfile'
import styles from './PublicHeader.module.scss'

/** компонент Header в публичной части */
const PublicHeader: FC<PublicHeaderTypes> = ({ handleLogout }): JSX.Element => {
  // tODO: вынести все state в props убрать функционал на уровень выше
  // tODO: добавить анимации появления popup-ов
  /** состояние popup городов */
  const [showPopupCity, toggleShowPopupCity] = useToggle(false)
  /** состояние popup навигации */
  const [showPopupNavigation, toggleShowPopupNavigation] = useToggle(false)
  /** состояние popup каталог */
  const [showPopupCatalog, toggleShowPopupCatalog] = useToggle(false)
  /** состояние popup поддержки */
  const [showPopupSupport, toggleShowPopupSupport] = useToggle(false)
  /** состояние popup профиля */
  const [showPopupProfile, toggleShowPopupProfile] = useToggle(false)

  // кнопки профиля и избранное не отображаются, когда пользователь не авторизован
  return (
    <header className={styles.publicHeader}>
      <div className={styles.publicHeader__navigationBox}>
        <nav className={styles.navigation}>
          <div
            className={styles.navigation__btnCity}
            onClick={() => toggleShowPopupCity()}
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
                showPopupCity ? styles.rotateArrow : ''
              )}
            />
            {
              showPopupCity &&
                <PopupYourCity />
            }
          </div>

          <ul className={styles.navigation__list}>
            {navigationLinks.map((item: NavLinkArrayTypes) => (
              <li key={item.id}>
                <Link
                  className={styles.navigation__link}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              className={styles.navigation__moreBox}
              onClick={() => toggleShowPopupNavigation()}
            >
              <p className={styles.navigation__more}>
                Ещё
              </p>
              <IconWrapper
                IconComponent={IconArrowDown}
                iconClassname={cn(
                  styles.imgArrow,
                  showPopupNavigation ? styles.rotateArrow : ''
                )}
              />
              { showPopupNavigation &&
                <PopupMore />}

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
          icon={showPopupCatalog ? IconCross : IconThreeLanes}
          label='Каталог'
          onClick={() => toggleShowPopupCatalog()}
          paddingVariant='wide'
          withIcon={true}
        />
        {
          showPopupCatalog &&
            <PopupCatalog />
        }

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
              styles.btnGifts__imgGlareWrapper_left
            )}
          />

          <IconWrapper
            IconComponent={IconGlare}
            iconClassname={cn(styles.publicHeader__IconGlare)}
            wrapperClassname={cn(
              styles.btnGifts__imgGlareWrapper,
              styles.btnGifts__imgGlareWrapper_right
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
            onMouseEnter={() => toggleShowPopupSupport(true)}
            onMouseLeave={() => toggleShowPopupSupport(false)}
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
            {
              showPopupSupport &&
                <PopupSupport />
            }
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
            {/* counter избранное */}
            <span className={cn(styles.userPanel__counter)}>
              2
            </span>
          </button>

          {/* кнопка корзины  */}
          <button
            className={cn(styles.userPanel__btn)}
            type='button'
          >
            <IconWrapper
              IconComponent={IconCart}
              wrapperClassname={styles.userPanel__iconWrapper}
            />
            {/* counter корзины  */}
            <span className={cn(styles.userPanel__counter)}>
              +99
            </span>
          </button>

          {/* кнопка профиль */}
          <div
            onMouseEnter={() => toggleShowPopupProfile(true)}
            onMouseLeave={() => toggleShowPopupProfile(false)}
          >
            <button
              className={cn(styles.userPanel__btn)}
              type='button'
            >
              <span className={cn(styles.userPanel__name)}>
                Г
              </span>
            </button>

            {showPopupProfile &&
              <PopupProfile handleLogout={handleLogout} />}
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

      {/* блок навигации мобильной версии (3 кнопки каталог, популярное, идеи подарков) */}
      {/* tODO: убрать в отдельный компонент , когда будет допиливаться мобильный header */}
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
            colorVariant='grayMattBlack'
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
              styles.btnGifts__imgGlareWrapper_left
            )}
          />

          <IconWrapper
            IconComponent={IconGlare}
            wrapperClassname={cn(
              styles.btnGifts__imgGlareWrapper,
              styles.btnGifts__imgGlareWrapper_right
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

export default memo(PublicHeader)
