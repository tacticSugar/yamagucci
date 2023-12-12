import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'

type FetchOptionsParamsType = {
  /** на какие опции делать запрос */
  optionsApi: string
}

/** ключ под которым записываем */
const QUERY_KEY_FETCH_OPTIONS = 'options'

/** тип ключа */
type QueryKeyType = [typeof QUERY_KEY_FETCH_OPTIONS, FetchOptionsParamsType];

/** функция запроса продуктов */
// ts-prune-ignore-next
export const getOptions = async ({ optionsApi }: FetchOptionsParamsType): Promise<any> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<any>(optionsApi)

  return data
}

/** хук запроса списка продуктов */
const useFetchOptions = ({ optionsApi }: FetchOptionsParamsType): UseQueryResult<any, Error> => useQuery<any, Error, any, QueryKeyType>({
  enabled: !!optionsApi,
  queryFn: () => getOptions({ optionsApi }),
  queryKey: [QUERY_KEY_FETCH_OPTIONS, { optionsApi }]
})

export default useFetchOptions
