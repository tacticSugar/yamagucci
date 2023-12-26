import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { memo } from 'react'

import { getCategories, QUERY_KEY_FETCH_CATEGORIES } from '@/src/api/useFetchCategories/useFetchCategories'
import CategoriesPage from '@/src/components/pages/CategoriesPage/CategoriesPage'

/** загрузка данных. */
// ts-prune-ignore-next
export const getStaticProps: GetStaticProps = async () => {
  /** queryClient */
  const queryClient = new QueryClient()

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryFn: getCategories,
        queryKey: [QUERY_KEY_FETCH_CATEGORIES]
      })
    ])

    /** список продуктов */
    const categories = queryClient.getQueryData([QUERY_KEY_FETCH_CATEGORIES])

    if (!categories) {
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
export default memo(CategoriesPage)
