import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'

import { FetchOptionsParams, FetchOptionsQueryKeyType } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_OPTIONS = 'options'

/** функция запроса различный опций (любое апи) */
// ts-prune-ignore-next
export const getOptions = async ({ optionsApi }: FetchOptionsParams): Promise<any> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<any>(optionsApi)

  return data
}

/** хук запроса списка продуктов */
const useFetchOptions = ({ optionsApi }: FetchOptionsParams): UseQueryResult<any, Error> => useQuery<any, Error, any, FetchOptionsQueryKeyType>({
  enabled: !!optionsApi,
  queryFn: () => getOptions({ optionsApi }),
  queryKey: [QUERY_KEY_FETCH_OPTIONS, { optionsApi }]
})

export default useFetchOptions
