import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { BORBOZA_PRODUCTS_API } from '@/src/constants/constants'

import { FetchBorbozaIdsOriginalResult, FetchBorbozaIdsQueryKeyType } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_BORBOZA_IDS = 'borbozaIds'

/** функция запроса продуктов */
export const getBorbozaIds = async (): Promise<FetchBorbozaIdsOriginalResult> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<FetchBorbozaIdsOriginalResult>(BORBOZA_PRODUCTS_API)

  return data
}

/** хук запроса списка продуктов */
const useFetchBorbozaIds = (): UseQueryResult<FetchBorbozaIdsOriginalResult, Error> => useQuery<FetchBorbozaIdsOriginalResult, Error, FetchBorbozaIdsOriginalResult, FetchBorbozaIdsQueryKeyType>({
  queryFn: getBorbozaIds,
  queryKey: [QUERY_KEY_FETCH_BORBOZA_IDS]
})

export default useFetchBorbozaIds
