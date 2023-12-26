import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { memo } from 'react'

import { getBorbozaIds, QUERY_KEY_FETCH_BORBOZA_IDS } from '@/src/api/useFetchBorbozaIds/useFetchBorbozaIds'
import { getProduct, QUERY_KEY_FETCH_PRODUCT } from '@/src/api/useFetchProduct/useFetchProduct'
import { getRentTypes, QUERY_KEY_FETCH_RENT_TYPES } from '@/src/api/useFetchRentTypes/useFetchRentTypes'
import { getSizeTypes, QUERY_KEY_FETCH_SIZE_TYPES } from '@/src/api/useFetchSizeTypes/useFetchSizeTypes'
import AdminProductPage from '@/src/components/pages/AdminProductPage/AdminProductPage'

/** загрузка данных. */
// ts-prune-ignore-next
export const getStaticProps: GetStaticProps = async (context) => {
  /** queryClient */
  const queryClient = new QueryClient()

  /** слаг страны */
  const productId = context?.params?.productId?.toString()

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryFn: () => getProduct({ productId }),
        queryKey: [QUERY_KEY_FETCH_PRODUCT, { productId }]
      }),
      queryClient.prefetchQuery({
        queryFn: () => getRentTypes({}),
        queryKey: [QUERY_KEY_FETCH_RENT_TYPES, {}]
      }),
      queryClient.prefetchQuery({
        queryFn: () => getSizeTypes({}),
        queryKey: [QUERY_KEY_FETCH_SIZE_TYPES, {}]
      }),
      queryClient.prefetchQuery({
        queryFn: getBorbozaIds,
        queryKey: [QUERY_KEY_FETCH_BORBOZA_IDS]
      })
    ])

    /** список продуктов */
    const product = queryClient.getQueryData([QUERY_KEY_FETCH_PRODUCT, { productId }])

    if (!product) {
      return {
        redirect: {
          destination: '/404',
          permanent: false
        }
      }
    }

    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
      },
      revalidate: 1800
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
}

/** получем пути */
// ts-prune-ignore-next
export const getStaticPaths = async (): Promise<any> => ({
  fallback: 'blocking',
  paths: []
})

// ts-prune-ignore-next
export default memo(AdminProductPage)
