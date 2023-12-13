import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { PRODUCT_API } from '@/src/constants/constants'

import { FetchProductOriginalResult, FetchProductParams, FetchProductQueryKeyType } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_PRODUCT = 'product'

/** функция запроса продуктов */
export const getProduct = async ({ productId }: FetchProductParams): Promise<FetchProductOriginalResult> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<FetchProductOriginalResult>(`${PRODUCT_API}/${productId}`)

  return data
}

/** хук запроса списка продуктов */
const useFetchProduct = ({ productId }: FetchProductParams): UseQueryResult<FetchProductOriginalResult, Error> => useQuery<FetchProductOriginalResult, Error, FetchProductOriginalResult, FetchProductQueryKeyType>({
  enabled: !!productId,
  queryFn: () => getProduct({ productId }),
  queryKey: [QUERY_KEY_FETCH_PRODUCT, { productId }]
})

export default useFetchProduct
