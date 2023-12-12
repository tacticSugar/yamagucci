import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { ENV_IS_STORYBOOK, SIZE_TYPES_API } from '@/src/constants/constants'

import { FetchSizeParams, QueryKeyType, ResultRentTypes } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_SIZE_TYPES = 'sizeTypes'

/** функция запроса продуктов */
// ts-prune-ignore-next
export const getSizeTypes = async ({ mockVariant }: FetchSizeParams): Promise<ResultRentTypes> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<ResultRentTypes>(SIZE_TYPES_API,
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
const useFetchSizeTypes = ({ mockVariant, name }: FetchSizeParams): UseQueryResult<ResultRentTypes, Error> => useQuery<ResultRentTypes, Error, ResultRentTypes, QueryKeyType>({
  enabled: name === 'size',
  queryFn: () => getSizeTypes({ mockVariant }),
  queryKey: [QUERY_KEY_FETCH_SIZE_TYPES, { mockVariant }]
})

export default useFetchSizeTypes
