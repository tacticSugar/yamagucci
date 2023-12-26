import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { memo } from 'react'

import { getCategory, QUERY_KEY_FETCH_CATEGORY } from '@/src/api/useFetchCategory/useFetchCategory'
import CategoryPage from '@/src/components/pages/CategoryPage/CategoryPage'

/** загрузка данных. */
// ts-prune-ignore-next
export const getStaticProps: GetStaticProps = async (context) => {
  /** queryClient */
  const queryClient = new QueryClient()

  /** слаг страны */
  const categoryId = context?.params?.categoryId?.toString()

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryFn: () => getCategory({ categoryId }),
        queryKey: [QUERY_KEY_FETCH_CATEGORY, { categoryId }]
      })
    ])

    /** список продуктов */
    const category = queryClient.getQueryData([QUERY_KEY_FETCH_CATEGORY, { categoryId }])

    if (!category) {
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
export default memo(CategoryPage)
