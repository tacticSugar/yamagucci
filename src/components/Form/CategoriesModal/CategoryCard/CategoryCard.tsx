import IconClose from 'public/assets/icons/close.svg'
import { type FC } from 'react'

import IconWrapper from '@/src/components/atoms/IconWrapper/IconWrapper'
import { CategoryCardTypes } from '@/src/components/Form/CategoriesModal/_types'

import styles from './CategoryCard.module.scss'

/** компонент категорий с модалкой */
const CategoryCard: FC<CategoryCardTypes> = ({
  category,
  getParentName,
  onClick
}) => (
  <li
    className={styles.category}
    key={category.id}
  >
    <span className={styles.category__name}>
      {category?.parent_id ? `--- ${category.name}` : category.name}
    </span>
    <span className={styles.category__type}>
      {getParentName ? getParentName(category.parent_id) : 'Категория'}
    </span>
    <IconWrapper
      IconComponent={IconClose}
      onClick={() => onClick(category.id)}
      wrapperClassname={styles.category__closeIcon}
    />
  </li>
)

export default CategoryCard
