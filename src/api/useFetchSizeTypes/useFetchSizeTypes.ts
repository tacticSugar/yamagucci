import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { ENV_IS_STORYBOOK, SIZE_TYPES_API } from '@/src/constants/constants'

import { FetchSizeTypesOriginalResult, FetchSizeTypesParams, FetchSizeTypesQueryKeyType } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_SIZE_TYPES = 'sizeTypes'

/** функция запроса продуктов */
// ts-prune-ignore-next
export const getSizeTypes = async ({ mockVariant }: FetchSizeTypesParams): Promise<FetchSizeTypesOriginalResult> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<FetchSizeTypesOriginalResult>(SIZE_TYPES_API,
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
const useFetchSizeTypes = ({ mockVariant, name }: FetchSizeTypesParams): UseQueryResult<FetchSizeTypesOriginalResult, Error> => useQuery<FetchSizeTypesOriginalResult, Error, FetchSizeTypesOriginalResult, FetchSizeTypesQueryKeyType>({
  enabled: name === 'size',
  queryFn: () => getSizeTypes({ mockVariant }),
  queryKey: [QUERY_KEY_FETCH_SIZE_TYPES, { mockVariant }]
})

export default useFetchSizeTypes
