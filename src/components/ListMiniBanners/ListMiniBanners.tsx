import Image from 'next/image'
import type { FC } from 'react'
import Container from 'src/components/DynamicLayout/Container/Container'

import styles from './ListMiniBanners.module.scss'

type ListMiniBannersTypes = {}

/** sda */
const miniBanners =
[
  {
    id: 1,
    img: '/assets/temp/1_minibanner_l.webp',
    title: 'mini banner1'
  },
  {
    id: 2,
    img: '/assets/temp/2_minibanner_l.webp',
    title: 'mini banner2'
  },
  {
    id: 3,
    img: '/assets/temp/3_minibanner_l.webp',
    title: 'mini banner3'
  },
  {
    id: 4,
    img: '/assets/temp/4_minibanner_l.webp',
    title: 'mini banner1'
  },
  {
    id: 5,
    img: '/assets/temp/5_minibanner_l.webp',
    title: 'mini banner2'
  },
  {
    id: 6,
    img: '/assets/temp/6_minibanner_l.webp',
    title: 'mini banner3'
  },
  {
    id: 7,
    img: '/assets/temp/7_minibanner_l.webp',
    title: 'mini banner1'
  },
  {
    id: 8,
    img: '/assets/temp/8_minibanner_l.webp',
    title: 'mini banner2'
  }
]

/** список мини баннеров */
const ListMiniBanners: FC<ListMiniBannersTypes> = () => {
  console.log('hue')

  return (
    <Container>
      <ul className={styles.list}>
        {miniBanners.map((banner) => (
          <li
            className={styles.imgWrapper}
            key={banner.id}
          >
            <Image
              alt={banner.title}
              className={styles.img}
              fill
              objectFit='cover'
              src={banner.img}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListMiniBanners
