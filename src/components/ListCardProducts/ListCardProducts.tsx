import type { FC } from 'react'

import CardProduct from './CardProduct/CardProduct'
import styles from './ListCardProducts.module.scss'

type ListCardProductsTypes = {}

/** */
const products =
[
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 1,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 2,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 3,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 4,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 5,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 6,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 7,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 8,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 9,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 10,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 1,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  },
  {
    description: 'Массажная капсула для тела и ума',
    href: '/products/yamaguchi-xu',
    id: 1,
    name: 'Yamaguchi Xu',
    price: '2700000',
    priceOld: '10000000',
    src: '/assets/temp/nagiev_xu_2_web_p_cart.webp',
    title: 'mini banner1'
  }
]

/** */
const ListCardProducts: FC<ListCardProductsTypes> = () => (
  <ul className={styles.list}>
    { products.map((product) => (
      <CardProduct
        {...product}
        key={product.id}
      />
    ))}
  </ul>
)

export default ListCardProducts
