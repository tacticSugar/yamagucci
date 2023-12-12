import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { BANNERS_API, ENV_IS_STORYBOOK } from '@/src/constants/constants'
import parseJSON from '@/src/lib/parseJSON'

import { FetchBannersParams, FetchBannersQueryKeyType, FetchBannersResult } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_BANNERS = 'banners'

/** функция запроса продуктов */
export const getBanners = async ({ mockVariant }: FetchBannersParams): Promise<FetchBannersResult> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<FetchBannersResult>(BANNERS_API,
    {
      params: {
        ...Object.assign(
          {},
          ENV_IS_STORYBOOK && { mockVariant }
        )
      },
      transformResponse: (response) => {
        /** распаршенные данные */
        const parsedData = parseJSON(response)
        /** текущие баннеры */
        const currentBanners = parsedData?.data?.filter((banner) => banner?.status === 1)
        /** архивные баннеры */
        const archivedBanners = parsedData?.data?.filter((banner) => banner?.status === 0)

        return {
          archivedBanners,
          currentBanners
        }
      }
    }
  )

  return data
}

/** хук запроса списка продуктов */
const useFetchBanners = ({ mockVariant }: FetchBannersParams): UseQueryResult<FetchBannersResult, Error> => useQuery<FetchBannersResult, Error, FetchBannersResult, FetchBannersQueryKeyType>({
  queryFn: () => getBanners({ mockVariant }),
  queryKey: [QUERY_KEY_FETCH_BANNERS, { mockVariant }]
})

export default useFetchBanners
