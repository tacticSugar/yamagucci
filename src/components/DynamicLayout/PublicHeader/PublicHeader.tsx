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
  IconCart,
  IconGiftBox,
  IconGlare,
  IconHeart,
  IconLoupeStripes,
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
const PublicHeader: FC<PublicHeaderTypes> = ({ handleLogout }): JSX.Element =>

  // кнопки профиля и избранное не отображаются, когда пользователь не авторизован
  (
    <header className={styles.publicHeader}>
      <div className={styles.publicHeader__navigationBox}>
        <nav className={styles.navigation}>

          <PopupYourCity />

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

            <PopupMore />

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

        <PopupCatalog />

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

          <PopupSupport />
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

          {/* кнопка и popup профиля */}

          <PopupProfile handleLogout={handleLogout} />

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

export default memo(PublicHeader)
