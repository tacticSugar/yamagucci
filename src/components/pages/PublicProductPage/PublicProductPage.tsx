import type { FC } from 'react'

import useFetchProduct from '@/src/api/useFetchProduct/useFetchProduct'
import ProductHero from '@/src/components/ProductHero/ProductHero'
import Wysiwyg from '@/src/components/Wysiwyg'

type PublicProductPageTypes = {}

/** temp */
const PublicProductPage: FC<PublicProductPageTypes> = () => {
  /** получение данных */
  const { data, isLoading } = useFetchProduct({ productId: '677' })

  return (
    <>
      <ProductHero
        {...data?.data}
        isLoading={isLoading}
      />
      <Wysiwyg landingName='yamaguchi-xu' />
    </>

  )
}

export default PublicProductPage
