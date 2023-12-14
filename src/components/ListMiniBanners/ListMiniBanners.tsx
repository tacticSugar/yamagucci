import Link from 'next/link'
import type { FC } from 'react'

import Img from '@/src/components/atoms/Img/Img'
import Container from '@/src/components/DynamicLayout/Container/Container'

import styles from './ListMiniBanners.module.scss'

/** sda */
const miniBanners =
[
  {
    href: '/products/yamaguchi-xi',
    id: 1,
    img: '/assets/temp/1_minibanner_l.webp',
    title: 'mini banner1'
  },
  {
    href: '/products/yamaguchi-xi',
    id: 2,
    img: '/assets/temp/2_minibanner_l.webp',
    title: 'mini banner2'
  },
  {
    href: '/products/yamaguchi-xi',
    id: 3,
    img: '/assets/temp/3_minibanner_l.webp',
    title: 'mini banner3'
  },
  {
    href: '/products/yamaguchi-xi',
    id: 4,
    img: '/assets/temp/4_minibanner_l.webp',
    title: 'mini banner1'
  },
  {
    href: '/categories/massazhnyie-kresla',
    id: 5,
    img: '/assets/temp/5_minibanner_l.webp',
    title: 'mini banner2'
  },
  {
    href: '/categories/massazhnyie-kresla',
    id: 6,
    img: '/assets/temp/6_minibanner_l.webp',
    title: 'mini banner3'
  },
  {
    href: '/categories/massazhnyie-kresla',
    id: 7,
    img: '/assets/temp/7_minibanner_l.webp',
    title: 'mini banner1'
  },
  {
    href: '/categories/massazhnyie-kresla',
    id: 8,
    img: '/assets/temp/8_minibanner_l.webp',
    title: 'mini banner2'
  }
]

/** список мини баннеров */
const ListMiniBanners: FC = () => (
  <Container>
    <ul className={styles.list}>
      {miniBanners.map((banner) => (
        <li
          className={styles.imgItem}
          key={banner.id}
        >
          <Link href={banner.href || '#'}>
            <Img
              imgClassname={styles.img}
              src={banner.img}
              title={banner.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  </Container>
)

export default ListMiniBanners
