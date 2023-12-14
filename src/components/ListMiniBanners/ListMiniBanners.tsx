import Image from 'next/image'
import type { FC } from 'react'

type ListMiniBannersTypes = {}

/** */
const miniBanners = [
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
    title: 'mini banner3'
  }
]

/** список мини баннеров */
const ListMiniBanners: FC<ListMiniBannersTypes> = () => (miniBanners.map((banner) => (
  <li key={banner.id}>
    <Image
      alt={banner.title}
      height={300}
      src={banner.img}
      width={300}
    />
  </li>
)))

export default ListMiniBanners
