import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { PRODUCTS_API } from '@/src/constants/constants'
import { paths as schema } from '@/src/types/schema'

export type ResultProducts = schema['/api/admin/products/schema']['get']['responses']['200']['content']['application/json']

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_PRODUCTS = 'products'

/** тип ключа */
type QueryKeyType = [typeof QUERY_KEY_FETCH_PRODUCTS];

/** функция запроса продуктов */
export const getProducts = async (): Promise<ResultProducts> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<ResultProducts>(PRODUCTS_API)

  return data
}

/** хук запроса списка продуктов */
const useFetchProducts = (): UseQueryResult<ResultProducts, Error> => useQuery<ResultProducts, Error, ResultProducts, QueryKeyType>({
  queryFn: getProducts,
  queryKey: [QUERY_KEY_FETCH_PRODUCTS]
})

export default useFetchProducts
