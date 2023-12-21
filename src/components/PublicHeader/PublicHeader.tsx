import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import HeaderLogo from '@/src/components/atoms/HeaderLogo/HeaderLogo'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import {
  IconArrowDown,
  IconBall,
  IconCameraMovie,
  IconCart,
  IconCross,
  IconExit,
  IconEye,
  IconFire,
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
  IconPhonRotary,
  IconScales,
  IconSearch,
  IconShoppingCart,
  IconSmallLogo,
  IconThreeLanes,
  IconWhatsapp
} from '@/src/constants/icons'

import {
  GlobalCategoryArrayTypes,
  moreArrayTypes,
  navLinkArrayTypes
} from './_types'
import {
  arrayCity,
  globalCategory,
  moreArray,
  navigationLinksText,
  subcategoriesArray
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

  /** подкатегории в каталоге */
  const [isSelectedCategory, setSelectedCategory] = useState([])

  /** категория в каталоге, при наведении */
  const [idFocusCategory, setFocusCategory] =
  useState({ href: '/', id: 1, name: 'Массажные кресла', src: '' })

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

  /** функция отрисовки под категорий в каталоге, при наведении */
  const choosingCategory = (arrayCategory, idFocusCategory) => {
    /** выбор нужного массива категорий */
    const category = arrayCategory.find((item, index) => index + 1 === idFocusCategory)

    setSelectedCategory(category)
  }

  /** функция для получения id global category при наведении */
  const handlerIdCategory = (idFocusCategory) => {
    /** выбор активной категории */
    const category = globalCategory.find((item) => item.id === idFocusCategory)

    setFocusCategory(category)
  }

  return (
    <header className={styles.publicHeader}>
      <div className={styles.publicHeader__navigationBox}>
        <nav className={styles.navigation}>
          <div
            className={styles.popupYourCity}
            onClick={openPopupCity}
          >
            <IconWrapper
              IconComponent={IconLocation}
              iconClassname={styles.IconLocation}
            />
            <p className={styles.popupYourCity__text}>
              Москва
            </p>
            <IconWrapper
              IconComponent={IconArrowDown}
              iconClassname={cn(
                styles.imgArrow,
                isPopupCityOpen ? styles.rotateArrow : ''
              )}
            />

            <div
              className={cn(
                styles.popupYourCity__popup,
                styles.popup,
                isPopupCityOpen
                  ? ''
                  : cn(styles.popupYourCity__popup_close, styles.popup_close)
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

        <div
          className={cn(
            styles.catalogPopup,
            styles.popup,
            isPopupCatalogOpen
              ? ''
              : cn(styles.catalogPopup_close, styles.popup_close)
          )}
        >
          <div
            className={cn(
              styles.catalogPopup__box,
              styles.catalogPopup__box_left
            )}
          >
            <div className={styles.catalogPopup__topImgBox}>
              <Link
                className={styles.catalogPopup__imgContainer}
                href='/'
              >
                <h6 className={cn(styles.catalogPopup__textImg)}>
                  Новинки
                </h6>
                <img
                  alt='Новинки'
                  src='/assets/images/catalogPopup/newProducts.webp'
                />
              </Link>
              <Link
                className={styles.catalogPopup__imgContainer}
                href='/'
              >
                <h6 className={cn(styles.catalogPopup__textImg)}>
                  Идеи
                  <br />
                  подарков
                </h6>
                <img
                  alt='Новинки'
                  src='/assets/images/catalogPopup/giftIdeas.webp'
                />
              </Link>
              <Link
                className={styles.catalogPopup__imgContainer}
                href='/'
              >
                <h6
                  className={cn(
                    styles.catalogPopup__textImg,
                    styles.catalogPopup__textImg_white
                  )}
                >
                  Домашний фитнес-зал
                </h6>
                <img
                  alt='Новинки'
                  src='/assets/images/catalogPopup/homeFitnessRoom.webp'
                />
              </Link>
            </div>

            <ul className={styles.catalogPopup__globalCategoriesBox}>
              {globalCategory.map((category: GlobalCategoryArrayTypes) => (
                <Link
                  href={category.href}
                  key={category.id}
                  onMouseEnter={() => {
                    choosingCategory(subcategoriesArray, category.id)
                    handlerIdCategory(category.id)
                  }}
                >
                  <li className={styles.catalogPopup__globalCategories}>
                    <IconWrapper
                      IconComponent={category.img}
                      wrapperClassname={styles.catalogPopup__iconWrapper}
                    />
                    <p className={styles.catalogPopup__title}>
                      {category.name}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div
            className={cn(
              styles.catalogPopup__box,
              styles.catalogPopup__box_right
            )}
          >
            <div
              className={styles.catalogPopup__imgCategory}
            >
              <img
                alt='товары'
                className={styles.catalogPopup__CategoryImg}
                src={idFocusCategory?.src}
              />
              <p className={cn(styles.catalogPopup__nameCategory,
                idFocusCategory?.id === 1 || idFocusCategory?.id === 5 ? styles.catalogPopup__nameCategory_colorWhite : '')}
              >
                {idFocusCategory?.name}
              </p>
              <Link
                className={cn(styles.catalogPopup__linkCategory,
                  idFocusCategory?.id === 1 || idFocusCategory?.id === 5 ? styles.catalogPopup__linkCategory_colorWhite : '')}
                href={idFocusCategory?.href}
              >
                Смотреть все
              </Link>
            </div>

            <ul className={styles.catalogPopup__listSubcategories} >
              {isSelectedCategory?.map((subcategory) => (
                <Link
                  href={subcategory.href}
                  key={subcategory.id}
                >
                  <li
                    className={styles.catalogPopup__subcategories}

                  >
                    <p className={styles.catalogPopup__titleSubcategories}>
                      {subcategory.name}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

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
            <div
              className={cn(
                styles.popupSupport,
                styles.popup,
                isPopupSupportOpen
                  ? ''
                  : cn(styles.popup_close, styles.popupSupport__popup_close)
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
