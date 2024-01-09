import type { FC } from 'react'

import Landing from '@/src/components/Landing/Landing'
import ProductHero from '@/src/components/ProductHero/ProductHero'

import { PublicProductPageTypes } from './_types'

/** temp */
const PublicProductPage: FC<PublicProductPageTypes> = ({ data }) => (
  <>
    <ProductHero
      {...data?.product}
    />
    <Landing landingName='yamaguchi-xu' />
  </>

)

export default PublicProductPage
