import { useToggle } from '@reactuses/core'
import cn from 'classnames'
import Link from 'next/link'
import { memo, useCallback, useEffect, useRef, useState } from 'react'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { categoriesList } from '@/src/constants/header'
import {
  IconCross,
  IconThreeLanes
} from '@/src/constants/icons'

import { GlobalCategoryArrayTypes } from './_types'
import styles from './PopupCatalog.module.scss'

/** popup каталога в header */
const PopupCatalog = (): JSX.Element => {
/** состояние popup каталог */
  const [showPopupCatalog, toggleShowPopupCatalog] = useToggle(false)
  /** popupCatalogRef */
  const popupCatalogRef = useRef<HTMLDivElement>(null)
  /** категория в каталоге, при наведении */
  const [focusedCategory, setFocusedCategory] = useState<GlobalCategoryArrayTypes>(categoriesList.find((item) => item.id === 1))

  /** функция для клика вне модального окна */
  const handleClickOutside = useCallback((e) => {
    if (popupCatalogRef.current && !popupCatalogRef.current.contains(e.target)) {
      toggleShowPopupCatalog(false)
    }
  }, [toggleShowPopupCatalog])

  useEffect(() => {
    if (showPopupCatalog) {
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [toggleShowPopupCatalog, showPopupCatalog, handleClickOutside])

  /** функция для получения id global category при наведении */
  const handlerIdCategory = (idFocusedCategory) => {
    /** выбор активной категории */
    const category = categoriesList.find((item) => item.id === idFocusedCategory)

    setFocusedCategory(category)
  }

  return (
    <div ref={popupCatalogRef}>
      <ButtonIcon
        className={styles.btnCatalog}
        colorVariant='red'
        icon={showPopupCatalog ? IconCross : IconThreeLanes}
        label='Каталог'
        onClick={toggleShowPopupCatalog}
        paddingVariant='wide'
        withIcon={true}
      />

      <div className={cn(styles.catalogPopup, !showPopupCatalog && styles.catalogPopup_close)}>
        <div className={cn(styles.catalogPopup__box, styles.catalogPopup__box_left)}>
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
              <h6 className={cn(styles.catalogPopup__textImg, styles.catalogPopup__textImg_white)}>
                Домашний фитнес-зал
              </h6>
              <img
                alt='Новинки'
                src='/assets/images/catalogPopup/homeFitnessRoom.webp'
              />
            </Link>
          </div>

          <ul className={styles.catalogPopup__globalCategoriesBox}>
            {categoriesList.map((category: GlobalCategoryArrayTypes) => (
              <Link
                className={styles.catalogPopup__globalCategories}
                href={category.href}
                key={category.id}
                onMouseEnter={() => handlerIdCategory(category.id)}
              >
                <IconWrapper
                  IconComponent={category.img}
                  wrapperClassname={styles.catalogPopup__iconWrapper}
                />
                <p className={styles.catalogPopup__title}>
                  {category.name}
                </p>
              </Link>
            ))}
          </ul>
        </div>
        <div className={cn(styles.catalogPopup__box, styles.catalogPopup__box_right)}>
          <div className={styles.catalogPopup__imgCategory}>
            <img
              alt='товары'
              className={styles.catalogPopup__categoryImg}
              src={focusedCategory?.src}
            />
            <p className={cn(styles.catalogPopup__nameCategory,
              (focusedCategory?.id === 1 || focusedCategory?.id === 5) && styles.catalogPopup__nameCategory_colorWhite)}
            >
              {focusedCategory?.name}
            </p>
            <Link
              className={cn(styles.catalogPopup__linkCategory,
                (focusedCategory?.id === 1 || focusedCategory?.id === 5) && styles.catalogPopup__linkCategory_colorWhite)}
              href={focusedCategory?.href}
            >
              Смотреть все
            </Link>
          </div>

          <ul className={styles.catalogPopup__listSubcategories} >
            {focusedCategory?.subcategories?.map((subcategory) => (
              <Link
                href={subcategory.href}
                key={subcategory.id}
              >
                <li className={styles.catalogPopup__subcategories}>
                  <p className={styles.catalogPopup__titleSubcategories}>
                    {subcategory.name}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default memo(PopupCatalog)
