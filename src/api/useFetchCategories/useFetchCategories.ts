import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { CATEGORIES_SCHEMA_API } from '@/src/constants/constants'
import { paths as schema } from '@/src/types/schema'

export type ResultCategories = schema['/api/admin/categories/schema']['get']['responses']['200']['content']['application/json']

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_CATEGORIES = 'categories'

/** тип ключа */
type QueryKeyType = [typeof QUERY_KEY_FETCH_CATEGORIES];

/** функция запроса продуктов */
export const getCategories = async (): Promise<ResultCategories> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<ResultCategories>(CATEGORIES_SCHEMA_API)

  return data
}

/** хук запроса списка продуктов */
const useFetchCategories = (): UseQueryResult<ResultCategories, Error> => useQuery<ResultCategories, Error, ResultCategories, QueryKeyType>({
  queryFn: getCategories,
  queryKey: [QUERY_KEY_FETCH_CATEGORIES]
})

export default useFetchCategories
