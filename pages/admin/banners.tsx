import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { memo } from 'react'

import { getBanners, QUERY_KEY_FETCH_BANNERS } from '@/src/api/useFetchBanners/useFetchBanners'
import BannersPage from '@/src/components/pages/BannersPage/BannersPage'

/** загрузка данных. */
// ts-prune-ignore-next
export const getStaticProps: GetStaticProps = async () => {
  /** queryClient */
  const queryClient = new QueryClient()

  try {
    await Promise.all([
      await queryClient.prefetchQuery({
        queryFn: () => getBanners({}),
        queryKey: [QUERY_KEY_FETCH_BANNERS]
      })
    ])

    /** список продуктов */
    const banners = queryClient.getQueryData([QUERY_KEY_FETCH_BANNERS])

    if (!banners) {
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
export default memo(BannersPage)
