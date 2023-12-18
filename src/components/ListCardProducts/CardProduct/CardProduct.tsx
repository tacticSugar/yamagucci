import Link from 'next/link'
import type { FC } from 'react'

import ButtonIcon from '@/src/components/atoms/ButtonIcon/ButtonIcon'
import Img from '@/src/components/atoms/Img/Img'

import styles from './CardProduct.module.scss'

type CardProductTypes = {}

/** компонент карточки продукта */
const CardProduct: FC<CardProductTypes> = ({ description, href, name, price, priceOld, src }) => (
  <Link
    className={styles.card}
    href={href}
  >
    <Img
      imgClassname={styles.img}
      src={src}
    />
    <div className={styles.priceWrapper}>
      <p className={styles.price}>
        {price}
      </p>
      <p className={styles.priceOld}>
        {priceOld}
      </p>
    </div>
    <h3 className={styles.name}>
      {name}
    </h3>
    <p className={styles.description}>
      {description}
    </p>
    <ButtonIcon
      colorVariant={'black'}
      label={'Купить'}
      paddingVariant={'slim'}
      withIcon={false}
    />
  </Link>

)

export default CardProduct
