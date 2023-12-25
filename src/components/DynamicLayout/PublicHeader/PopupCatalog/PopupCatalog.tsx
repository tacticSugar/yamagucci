import cn from 'classnames'
import Link from 'next/link'
import { memo, useState } from 'react'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { categoriesList } from '@/src/constants/header'
import {
  IconMassageChair
} from '@/src/constants/icons'

import { GlobalCategoryArrayTypes } from './_types'
import styles from './PopupCatalog.module.scss'

/** popup каталога в header */
const PopupCatalog = (): JSX.Element => {
  /** категория в каталоге, при наведении */
  const [FocusedCategory, setFocusedCategory] =
   useState({
     href: '/',
     id: 1,
     img: IconMassageChair,
     name: 'Массажные кресла',
     src: '/assets/images/catalogPopup/globalCategory/chair.webp',
     subcategories: [
       { href: '/', id: 1, name: 'Для дома' },
       { href: '/', id: 2, name: 'Для офиса' },
       { href: '/', id: 3, name: 'Кресла-качалки' },
       { href: '/', id: 4, name: 'Интерьерные кресла' },
       { href: '/', id: 5, name: 'Массажные кровати' },
       { href: '/', id: 6, name: 'С купюро-приемником' },
       { href: '/', id: 7, name: 'Аксессуары' }]
   })

  /** функция для получения id global category при наведении */
  const handleFocusCategory = (idFocusCategory) => {
    /** выбор активной категории */
    const category = categoriesList.find((item) => item.id === idFocusCategory)

    setFocusedCategory(category)
  }

  return (
    <div
      className={cn(
        styles.catalogPopup
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
          {categoriesList.map((category: GlobalCategoryArrayTypes) => (
            <Link
              href={category.href}
              key={category.id}
              onMouseEnter={() => {
                // choosingCategory(subcategoriesArray, category.id)
                handleFocusCategory(category.id)
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
            src={FocusedCategory?.src}
          />
          <p className={cn(styles.catalogPopup__nameCategory,
            FocusedCategory?.id === 1 || FocusedCategory?.id === 5 ? styles.catalogPopup__nameCategory_colorWhite : '')}
          >
            {FocusedCategory?.name}
          </p>
          <Link
            className={cn(styles.catalogPopup__linkCategory,
              FocusedCategory?.id === 1 || FocusedCategory?.id === 5 ? styles.catalogPopup__linkCategory_colorWhite : '')}
            href={FocusedCategory?.href}
          >
            Смотреть все
          </Link>
        </div>

        <ul className={styles.catalogPopup__listSubcategories} >
          {FocusedCategory.subcategories?.map((subcategory) => (
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
  )
}

export default memo(PopupCatalog)
