import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { ENV_IS_STORYBOOK, RENT_TYPES_API } from '@/src/constants/constants'

import { FetchRentTypesOriginalResult, FetchRentTypesParams, FetchRentTypesQueryKeyType } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_RENT_TYPES = 'rentTypes'

/** функция запроса продуктов */
// ts-prune-ignore-next
export const getRentTypes = async ({ mockVariant }: FetchRentTypesParams): Promise<FetchRentTypesOriginalResult> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<FetchRentTypesOriginalResult>(RENT_TYPES_API,
    {
      params: {
        ...Object.assign(
          {},
          ENV_IS_STORYBOOK && { mockVariant }
        )
      }
    }
  )

  return data
}

/** хук запроса списка продуктов */
const useFetchRentTypes = ({ mockVariant, name }: FetchRentTypesParams): UseQueryResult<FetchRentTypesOriginalResult, Error> => useQuery<FetchRentTypesOriginalResult, Error, FetchRentTypesOriginalResult, FetchRentTypesQueryKeyType>({
  enabled: name === 'rent',
  queryFn: () => getRentTypes({ mockVariant }),
  queryKey: [QUERY_KEY_FETCH_RENT_TYPES, { mockVariant }]
})

export default useFetchRentTypes
