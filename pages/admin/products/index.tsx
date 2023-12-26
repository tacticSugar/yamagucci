import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { memo } from 'react'

import { getProducts, QUERY_KEY_FETCH_PRODUCTS } from '@/src/api/useFetchProducts/useFetchProducts'
import ProductsPage from '@/src/components/pages/ProductsPage/ProductsPage'

/** загрузка данных. */
// ts-prune-ignore-next
export const getStaticProps: GetStaticProps = async () => {
  /** queryClient */
  const queryClient = new QueryClient()

  try {
    await Promise.all([
      await queryClient.prefetchQuery({
        queryFn: () => getProducts(),
        queryKey: [QUERY_KEY_FETCH_PRODUCTS]
      })
    ])

    /** список продуктов */
    const products = queryClient.getQueryData([QUERY_KEY_FETCH_PRODUCTS])

    if (!products) {
      return {
        redirect: {
          destination: '/404',
          permanent: false
        }
      }
    }

    return {
      props: {
        dehydratedState: dehydrate(queryClient)
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

// ts-prune-ignore-next
export default memo(ProductsPage)
