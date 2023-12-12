import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { PRODUCT_API } from '@/src/constants/constants'
import { paths as schema } from '@/src/types/schema'

type FetchProductParamsType = {
  /** id продукта */
  productId: string
}

export type ResultProduct = schema['/api/admin/products/{product}']['get']['responses']['200']['content']['application/json']

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_PRODUCT = 'product'

/** тип ключа */
type QueryKeyType = [typeof QUERY_KEY_FETCH_PRODUCT, FetchProductParamsType];

/** функция запроса продуктов */
export const getProduct = async ({ productId }: FetchProductParamsType): Promise<ResultProduct> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<ResultProduct>(`${PRODUCT_API}/${productId}`)

  return data
}

/** хук запроса списка продуктов */
const useFetchProduct = ({ productId }: FetchProductParamsType): UseQueryResult<ResultProduct, Error> => useQuery<ResultProduct, Error, ResultProduct, QueryKeyType>({
  enabled: !!productId,
  queryFn: () => getProduct({ productId }),
  queryKey: [QUERY_KEY_FETCH_PRODUCT, { productId }]
})

export default useFetchProduct
