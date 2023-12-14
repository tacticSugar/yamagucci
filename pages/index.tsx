import { type FC, memo } from 'react'

import ListMiniBanners from '@/src/components/ListMiniBanners/ListMiniBanners'

/** домашняя страница */
const Home: FC = () => (
  <div>
    <ListMiniBanners />
  </div>
)

// ts-prune-ignore-next
export default memo(Home)
